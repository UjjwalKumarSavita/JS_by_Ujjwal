import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../../core/models/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course!: Course;

  weeksLabel(w: number) {
    if (w < 1) return '< 1 week';
    if (w <= 4) return '1–4 weeks';
    if (w <= 12) return '1–3 months';
    if (w <= 24) return '3–6 months';
    return '6–12 months';
  }
}
