import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../dashboard/header/header.component';
import { CourseCardComponent } from '../dashboard/course-card/course-card.component';
import { CourseService } from '../core/course.service';
import { EnrollService } from '../core/enroll.service';
import { Course } from '../core/models/course';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, CourseCardComponent],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent {
  private svc = inject(CourseService);
  private enroll = inject(EnrollService);

  get enrolled(): Course[] {
    const ids = this.enroll.enrolledIds();
    return this.svc.getCourses().filter((c: Course) => ids.includes(c.id));
  }
  get inProgress(): Course[] {
    return this.enrolled.filter((c: Course) => !this.enroll.isCompleted(c));
  }
  get completed(): Course[] {
    return this.enrolled.filter((c: Course) => this.enroll.isCompleted(c));
  }
}
