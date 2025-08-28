import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../dashboard/header/header.component';
import { CourseService } from '../core/course.service';
import { Course, Lesson } from '../core/models/course';
import { EnrollService } from '../core/enroll.service';
import { MediaPlayerComponent } from './media-player.component';
import { PdfViewerComponent } from './pdf-viewer.component';
import { TextViewerComponent } from './text-viewer.component';
import { LearnTabsComponent } from './learn-tabs.component';
import { CurriculumPanelComponent } from './curriculum-panel.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    CommonModule, HeaderComponent,
    MediaPlayerComponent, PdfViewerComponent, TextViewerComponent,
    LearnTabsComponent, CurriculumPanelComponent
  ],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private svc = inject(CourseService);
  private enroll = inject(EnrollService);

  course = signal<Course | undefined>(undefined);
  sIdx = signal<number>(0);
  lIdx = signal<number>(0);

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id')!;
      const c = this.svc.getCourseById(id);
      this.course.set(c);
      if (c && !this.enroll.isEnrolled(c.id)) this.enroll.enroll(c.id);

      // decide lesson from either lectureId param or query (?s=&l=)
      const lectureId = p.get('lectureId');
      if (c && lectureId) {
        const found = this.svc.findLessonById(c, lectureId);
        if (found) { this.sIdx.set(found.s); this.lIdx.set(found.l); this.enroll.setLast(c.id, lectureId); return; }
      }
      // fallback to query params or last
      this.route.queryParamMap.subscribe(q => {
        let s = parseInt(q.get('s') ?? '0', 10) || 0;
        let l = parseInt(q.get('l') ?? '0', 10) || 0;
        if (c) {
          if (Number.isNaN(s) || Number.isNaN(l)) {
            const last = this.enroll.getLast(c.id) ?? this.svc.firstLessonId(c);
            const found = this.svc.findLessonById(c, last)!;
            s = found.s; l = found.l;
          }
          this.sIdx.set(Math.max(0, Math.min(s, c.curriculum.length - 1)));
          const lessons = c.curriculum[this.sIdx()]?.lessons?.length || 1;
          this.lIdx.set(Math.max(0, Math.min(l, lessons - 1)));
          this.enroll.setLast(c.id, this.currentLesson()?.id || this.svc.firstLessonId(c));
        }
      });
    });
  }

  currentLesson(): Lesson | undefined {
    const c = this.course(); if (!c) return undefined;
    return c.curriculum[this.sIdx()]?.lessons?.[this.lIdx()];
  }

  chooseLesson(lessonId: string) {
    const c = this.course(); if (!c) return;
    const f = this.svc.findLessonById(c, lessonId);
    if (!f) return;
    this.sIdx.set(f.s); this.lIdx.set(f.l);
    this.enroll.setLast(c.id, lessonId);
    this.router.navigate(['/learn', c.id, 'lecture', lessonId]);
  }

  markDone() {
    const c = this.course(); const l = this.currentLesson();
    if (!c || !l) return;
    this.enroll.toggleLesson(c.id, l.id);
  }
  isDone(): boolean {
    const c = this.course(); const l = this.currentLesson();
    return !!(c && l && this.enroll.isLessonDone(c.id, l.id));
  }

  next() {
    const c = this.course(); if (!c) return;
    let s = this.sIdx(), l = this.lIdx();
    const lc = c.curriculum[s].lessons.length;
    if (l + 1 < lc) { l++; }
    else if (s + 1 < c.curriculum.length) { s++; l = 0; }
    this.chooseLesson(c.curriculum[s].lessons[l].id);
  }
  prev() {
    const c = this.course(); if (!c) return;
    let s = this.sIdx(), l = this.lIdx();
    if (l - 1 >= 0) { l--; }
    else if (s - 1 >= 0) { s--; l = c.curriculum[s].lessons.length - 1; }
    this.chooseLesson(c.curriculum[s].lessons[l].id);
  }

  progress(): number {
    const c = this.course(); if (!c) return 0;
    return this.enroll.progressPercent(c);
  }

  // pass-through for player settings persistence
  speed(): number {
    const c = this.course(); if (!c) return 1;
    return this.enroll.getSpeed(c.id);
  }
  volume(): number {
    const c = this.course(); if (!c) return 1;
    return this.enroll.getVolume(c.id);
  }
  onSpeed(n: number) { const c = this.course(); if (c) this.enroll.setSpeed(c.id, n); }
  onVolume(n: number) { const c = this.course(); if (c) this.enroll.setVolume(c.id, n); }
}
