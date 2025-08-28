import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';             // ⬅️ add
import { Router, RouterLink } from '@angular/router';
import { CourseCardComponent } from '../dashboard/course-card/course-card.component';
import { CourseService } from '../core/course.service';
import { AuthService } from '../core/auth.service';
import { HeaderComponent } from '../dashboard/header/header.component';
import { Course } from '../core/models/course';

type Tab = 'published'|'draft'|'archived';
type Sort = 'latest'|'rating'|'reviews'|'az'|'za';

@Component({
  selector: 'app-author-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, CourseCardComponent],
  template: `
  <app-header></app-header>
  <section class="wrap">
    <nav class="crumbs"><a routerLink="/dashboard">Home</a> › <span>My Courses</span></nav>
    <header class="top">
      <h2>My Courses</h2>
      <button class="create" (click)="goCreate()">Create New</button>
    </header>

    <div class="tabs">
      <button [class.active]="tab()==='published'" (click)="tab.set('published')">Published</button>
      <button [class.active]="tab()==='draft'" (click)="tab.set('draft')">Draft</button>
      <button [class.active]="tab()==='archived'" (click)="tab.set('archived')">Archived</button>
    </div>

    <div class="tools">
      <input placeholder="Search course" [(ngModel)]="q">
      <label>Sort:
        <select [(ngModel)]="sort">
          <option value="latest">Latest</option>
          <option value="rating">Highest Rating</option>
          <option value="reviews">Highest Reviewed</option>
          <option value="az">A–Z</option>
          <option value="za">Z–A</option>
        </select>
      </label>
    </div>

    <div class="grid">
      <app-course-card *ngFor="let c of view()" [course]="c"></app-course-card>
    </div>
  </section>
  `,
  styles: [`
  .wrap{max-width:1100px;margin:24px auto;padding:0 16px}
  .top{display:flex;justify-content:space-between;align-items:center}
  .create{background:#1f7a67;color:#fff;border:0;border-radius:6px;padding:8px 12px}
  .tabs{margin:12px 0}
  .tabs button{margin-right:8px;padding:6px 10px;border-radius:6px;border:1px solid #334}
  .tabs button.active{background:#223; color:#e6f3ff}
  .tools{display:flex;gap:12px;align-items:center;margin:12px 0}
  .tools input{flex:1; padding:8px 10px;border-radius:8px;border:1px solid #334;background:#111;color:#eee}
  .grid{display:grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap:16px}
  .crumbs{font-size:.9rem; color:#8aa}
  `]
})
export class AuthorCoursesComponent {
  tab = signal<Tab>('published');
  q = '';
  sort: Sort = 'latest';

  constructor(private svc: CourseService, private auth: AuthService, private router: Router) {}

  view = computed<Course[]>(() => {
    const me = this.auth.user()!;
    let arr = this.svc.listByAuthor(me.id, this.tab());
    const q = this.q.trim().toLowerCase();
    if (q) arr = arr.filter((c: Course) => c.title.toLowerCase().includes(q));
    switch (this.sort) {
      case 'rating': arr = [...arr].sort((a: Course,b: Course) => b.rating - a.rating); break;
      case 'reviews': arr = [...arr].sort((a: Course,b: Course) => b.reviews - a.reviews); break;
      case 'az': arr = [...arr].sort((a: Course,b: Course) => a.title.localeCompare(b.title)); break;
      case 'za': arr = [...arr].sort((a: Course,b: Course) => b.title.localeCompare(a.title)); break;
      default: arr = [...arr].sort((a: Course,b: Course) => (b.publishedAt||'').localeCompare(a.publishedAt||'')); break;
    }
    return arr;
  });

  goCreate() {
    const me = this.auth.user()!;
    const draft = this.svc.createDraft(me.id);
    this.router.navigate(['/author/create'], { queryParams: { id: draft.id }});
  }
}
