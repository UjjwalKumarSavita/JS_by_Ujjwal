import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseService } from '../core/course.service';
import { Course } from '../core/models/course';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CourseCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private svc = inject(CourseService);

  lastViewed: Course[] = this.svc.getCourses().slice(0, 4);
  newlyLaunched: Course[] = this.svc.getCourses().slice(3, 6);
}
