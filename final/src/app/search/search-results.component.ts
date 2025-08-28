import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../core/course.service';
import { Course } from '../core/models/course';
import { CourseCardComponent } from '../dashboard/course-card/course-card.component';
import { FilterSidebarComponent, FilterState } from './filter-sidebar.component';
import { HeaderComponent } from '../dashboard/header/header.component';

type SortKey = 'latest' | 'rating' | 'reviewed' | 'az' | 'za';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CourseCardComponent, FilterSidebarComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private svc = inject(CourseService);

  query = signal<string>(''); sort = signal<SortKey>('latest'); page = signal<number>(1);
  pageSize = 6;
  state = signal<FilterState>({ duration:'All', rating:'All', level:'All', published:'All' });
  all = signal<Course[]>(this.svc.getCourses());

  base = computed(() => this.svc.search(this.query()));
  
counts = computed(() => {
  const map: Record<string, number> = {};
  const pool = this.base() as Course[];
  pool.forEach((c: Course) => {
    const bucket = this.svc.weeksToBucket(c.durationWeeks);
    map['dur:'+bucket] = (map['dur:'+bucket] || 0) + 1;
    map['dur:All'] = (map['dur:All'] || 0) + 1;
  });
  return map;
});

filtered = computed(() => {
  let out = (this.base() as Course[]).slice();
  const s = this.state();
  if (s.duration !== 'All') out = out.filter((c: Course) => this.svc.weeksToBucket(c.durationWeeks) === s.duration);
  if (s.rating !== 'All') out = out.filter((c: Course) => c.rating >= (s.rating as number));
  if (s.level !== 'All') out = out.filter((c: Course) => c.level === s.level);
  if (s.published !== 'All') {
    const now = new Date();
    out = out.filter((c: Course) => {
      const d = new Date(c.publishedAt || '1970-01-01');
      const days = (now.getTime() - d.getTime()) / 86400000;
      if (s.published === 'week') return days <= 7;
      if (s.published === 'month') return days <= 31;
      if (s.published === 'six') return days <= 183;
      return days <= 366;
    });
  }
  switch (this.sort()) {
    case 'latest': out.sort((a: Course,b: Course)=> +new Date(b.publishedAt || 0) - +new Date(a.publishedAt || 0)); break;
    case 'rating': out.sort((a: Course,b: Course)=> b.rating - a.rating); break;
    case 'reviewed': out.sort((a: Course,b: Course)=> b.reviews - a.reviews); break;
    case 'az': out.sort((a: Course,b: Course)=> a.title.localeCompare(b.title)); break;
    case 'za': out.sort((a: Course,b: Course)=> b.title.localeCompare(a.title)); break;
  }
  return out;
});
  // counts = computed(() => {
  //   const map: Record<string, number> = {};
  //   const pool = this.base();
  //   pool.forEach(c => {
  //     const bucket = this.svc.weeksToBucket(c.durationWeeks);
  //     map['dur:'+bucket] = (map['dur:'+bucket] || 0) + 1;
  //     map['dur:All'] = (map['dur:All'] || 0) + 1;
  //   });
  //   return map;
  // });

  // filtered = computed(() => {
  //   let out = this.base().slice();

  //   const s = this.state();
  //   // duration
  //   if (s.duration !== 'All') {
  //     out = out.filter(c => this.svc.weeksToBucket(c.durationWeeks) === s.duration);
  //   }
  //   // rating
  //   if (s.rating !== 'All') {
  //     out = out.filter(c => c.rating >= (s.rating as number));
  //   }
  //   // level
  //   if (s.level !== 'All') {
  //     out = out.filter(c => c.level === s.level);
  //   }
  //   // published
  //   if (s.published !== 'All') {
  //     const now = new Date();
  //     const d = (c: Course) => new Date(c.publishedAt);
  //     out = out.filter(c => {
  //       const days = (now.getTime() - d(c).getTime()) / 86400000;
  //       if (s.published === 'week') return days <= 7;
  //       if (s.published === 'month') return days <= 31;
  //       if (s.published === 'six') return days <= 183;
  //       return days <= 366;
  //     });
  //   }

  //   // sort
  //   switch (this.sort()) {
  //     case 'latest': out.sort((a,b)=> +new Date(b.publishedAt) - +new Date(a.publishedAt)); break;
  //     case 'rating': out.sort((a,b)=> b.rating - a.rating); break;
  //     case 'reviewed': out.sort((a,b)=> b.reviews - a.reviews); break;
  //     case 'az': out.sort((a,b)=> a.title.localeCompare(b.title)); break;
  //     case 'za': out.sort((a,b)=> b.title.localeCompare(a.title)); break;
  //   }
  //   return out;
  // });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));
  paged = computed(() => {
    const p = Math.min(this.page(), this.totalPages());
    const start = (p - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  constructor() {
    effect(() => {
      this.route.queryParamMap.subscribe(params => {
        this.query.set(params.get('q') || '');
        this.page.set(parseInt(params.get('page') || '1', 10));
      });
    });
  }

  onStateChange(s: FilterState) {
    this.state.set(s);
    this.page.set(1);
  }

  setSort(s: SortKey) { this.sort.set(s); this.page.set(1); }

  gotoPage(p: number) {
    if (p < 1 || p > this.totalPages()) return;
    this.page.set(p);
    this.router.navigate([], { queryParamsHandling:'merge', queryParams: { page: p } });
  }
}
