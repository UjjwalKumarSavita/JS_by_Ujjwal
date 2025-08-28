import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterState {
  duration: string | 'All';
  rating: number | 'All';
  level: 'All' | 'Beginner' | 'Intermediate' | 'Advanced';
  published: 'All' | 'week' | 'month' | 'six' | 'year';
}

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent {
  @Input() counts: Record<string, number> = {};
  @Input() state: FilterState = { duration:'All', rating:'All', level:'All', published:'All' };
  @Output() stateChange = new EventEmitter<FilterState>();

  open = { duration:true, rating:true, published:true, level:true };

  private set<K extends keyof FilterState>(key: K, val: FilterState[K]) {
    this.state = { ...this.state, [key]: val };
    this.stateChange.emit(this.state);
  }

  // wrappers used by template
  setDuration(b: string | 'All') { this.set('duration', b); }
  setRating(r: number | 'All') { this.set('rating', r); }
  setPublished(p: 'All'|'week'|'month'|'six'|'year') { this.set('published', p); }
  setLevel(l: 'All'|'Beginner'|'Intermediate'|'Advanced') { this.set('level', l); }
}
