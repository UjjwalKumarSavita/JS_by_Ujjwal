import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../core/models/course';

@Component({
  selector: 'app-learn-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-tabs.component.html',
  styleUrls: ['./learn-tabs.component.scss']
})
export class LearnTabsComponent {
  @Input() course!: Course;
  tab: 'overview'|'author'|'testimonials' = 'overview';
}
