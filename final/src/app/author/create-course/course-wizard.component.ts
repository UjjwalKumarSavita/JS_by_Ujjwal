import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../core/course.service';
import { Course } from '../../core/models/course';
import { HeaderComponent } from '../../dashboard/header/header.component';
import { AddLectureModalComponent, LecturePayload } from './add-lecture-modal.component';

@Component({
  selector: 'app-course-wizard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, HeaderComponent, AddLectureModalComponent],
  templateUrl: './course-wizard.component.html',
  styleUrls: ['./course-wizard.component.scss']
})
export class CourseWizardComponent {
  private fb = inject(FormBuilder);
  // ⬇️ make service PUBLIC so template can access it
  svc = inject(CourseService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  step = signal<1|2|3>(1);
  course = signal<Course | undefined>(undefined);

  // Step 1 form
  basic = this.fb.group({
    title: ['', Validators.required],
    overview: [''],
    description: [''],
    thumbnail: ['']
  });

  // Step 3 form
  meta = this.fb.group({
    durationWeeks: [4, [Validators.required, Validators.min(1)]],
    level: ['Beginner', Validators.required],
    whatYouWillLearn: [''],
    skills: [''],
    prerequisites: [''],
    softwareRequirements: ['']
  });

  // Step 2 state
  selectedSectionId = signal<string | null>(null);
  showModal = signal<boolean>(false);

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('id')!;
    const c = this.svc.getCourseById(id);
    if (!c) { this.router.navigateByUrl('/author'); return; }
    this.course.set(c);

    this.basic.patchValue({
      title: c.title, overview: c.overview, description: c.description, thumbnail: c.thumbnail
    });
    this.meta.patchValue({
      durationWeeks: c.durationWeeks,
      level: c.level,
      whatYouWillLearn: (c.whatYouWillLearn || []).join('\n'),
      skills: (c.skills || '').toString().split(',').join(', '),
      prerequisites: (c.requirements || []).join('\n'),
      softwareRequirements: (c.softwareRequirements || '').toString().split(',').join(', ')
    });

    if (c.curriculum.length) this.selectedSectionId.set(c.curriculum[0].id);
  }

  // Stepper
  canNext(): boolean {
    if (this.step() === 1) return this.basic.valid;
    if (this.step() === 2) return !!this.course()?.curriculum.length;
    return this.meta.valid;
  }
  next(){ if (this.canNext()) this.step.set((this.step() + 1) as any); }
  prev(){ if (this.step() > 1) this.step.set((this.step() - 1) as any); }

  // Step 1
  saveStep1() {
    const c = this.course()!;
    const v = this.basic.value;
    c.title = v.title!;
    c.overview = v.overview || '';
    c.description = v.description || '';
    if (v.thumbnail) c.thumbnail = v.thumbnail;
    this.svc.save(c);
  }

  // Step 2
  sections(): Section[] { return this.course()?.curriculum || []; }

  addSection() {
    const c = this.course()!;
    const sec = this.svc.addSection(c.id, 'Untitled Section');
    this.selectedSectionId.set(sec.id);
  }
  removeSection(secId: string) {
    const c = this.course()!;
    this.svc.removeSection(c.id, secId);
    const first = this.sections()[0];
    this.selectedSectionId.set(first ? first.id : null);
  }
  duplicateSection(secId: string) {
    const c = this.course()!;
    this.svc.duplicateSection(c.id, secId);
  }

  openAddLecture(secId: string) { this.selectedSectionId.set(secId); this.showModal.set(true); }
  onAddLecture(payload: LecturePayload | null) {
    if (!payload) { this.showModal.set(false); return; }
    const c = this.course()!;
    const secId = this.selectedSectionId()!;
    this.svc.addLecture(c.id, secId, payload);
    this.showModal.set(false);
  }
  moveLecture(secId: string, idx: number, dir: -1|1) {
    this.svc.moveLecture(this.course()!.id, secId, idx, dir);
  }
  sectionMinutes(s: Section) { return this.svc.totalMinutes(s); }

  // Step 3
  saveStep3() {
    const c = this.course()!;
    const v = this.meta.value;
    c.durationWeeks = Number(v.durationWeeks);
    c.level = v.level as any;
    c.whatYouWillLearn = (v.whatYouWillLearn || '').split('\n').filter(Boolean);
    c.skills = (v.skills || '').split(',').map(x => x.trim()).filter(Boolean);
    c.requirements = (v.prerequisites || '').split('\n').filter(Boolean);
    c.softwareRequirements = (v.softwareRequirements || '').split(',').map(x => x.trim()).filter(Boolean);
    this.svc.save(c);
  }

  publish() {
    this.saveStep1();
    this.saveStep3();
    const c = this.course()!;
    const ok = c.title.trim().length > 0 &&
               c.curriculum.length > 0 &&
               c.curriculum.some(s => s.lessons.length > 0);
    if (!ok) { alert('Please add at least one section and one lecture.'); return; }
    this.svc.publish(c.id);
    alert('Your course published successfully!');
    this.router.navigate(['/author']);
  }
}
