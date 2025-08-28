import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course, Section } from '../core/models/course';
import { EnrollService } from '../core/enroll.service';

@Component({
  selector: 'app-curriculum-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum-panel.component.html',
  styleUrls: ['./curriculum-panel.component.scss']
})
export class CurriculumPanelComponent {
  @Input() course!: Course;
  @Input() currentLessonId!: string;
  @Output() select = new EventEmitter<string>();

  open: Record<number, boolean> = {};

  constructor(public enroll: EnrollService) {}

  toggle(i: number) { this.open[i] = !this.open[i]; }
  isOpen(i: number) { return this.open[i] ?? true; }

  isActive(id: string) { return id === this.currentLessonId; }
  choose(id: string) { this.select.emit(id); }

  // convenience for template
  lessonId(secIdx: number, lessonIdx: number) {
    return this.course.curriculum[secIdx].lessons[lessonIdx].id;
  }
}
