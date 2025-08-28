import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../core/course.service';
import { Course } from '../core/models/course';
import { HeaderComponent } from '../dashboard/header/header.component';
import { EnrollService } from '../core/enroll.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  private route = inject(ActivatedRoute);
  private svc = inject(CourseService);
  private enroll = inject(EnrollService);
  private router = inject(Router);

  course = signal<Course | undefined>(undefined);
  related = signal<Course[]>([]);
  tab = signal<'overview'|'content'|'author'|'testimonials'>('overview');

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const c = this.svc.getCourseById(id);
    this.course.set(c);
    this.related.set(this.svc.related(id));
  }

  isEnrolled(): boolean {
    const c = this.course();
    return !!c && this.enroll.isEnrolled(c.id);
  }

  onEnroll() {
    const c = this.course(); if (!c) return;
    if (!this.enroll.isEnrolled(c.id)) this.enroll.enroll(c.id);
    const first = this.svc.firstLessonId(c);
    this.router.navigate(['/learn', c.id, 'lecture', first]);
  }

  totalMinutes(section: any) {
    return section.lessons?.reduce((a: number, l: any) => a + l.durationMinutes, 0) || 0;
  }
  minutesToLabel(min: number) {
    const h = Math.floor(min / 60), m = min % 60;
    return h ? `${h}h ${m}m` : `${m}m`;
  }
  weeksLabel(w: number) {
    if (w < 1) return '< 1 week';
    if (w <= 4) return '1–4 weeks';
    if (w <= 12) return '1–3 months';
    if (w <= 24) return '3–6 months';
    return '6–12 months';
  }
}
