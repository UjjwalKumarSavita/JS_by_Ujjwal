import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router = inject(Router);

  query = '';
  suggestions = [
    'Python Programming','Advanced Python','Data Structures',
    'Google Data Analytics','React for Beginners','Angular 20 Mastery',
    'Machine Learning','SQL Fundamentals'
  ];
  showDropdown = false;

  filtered() {
    const q = this.query.trim().toLowerCase();
    if (!q) return [];
    return this.suggestions.filter(s => s.toLowerCase().includes(q)).slice(0, 6);
  }

  //  called by (keyup.enter) and suggestion click
  goSearch(text?: string) {
    const q = (text ?? this.query).trim();
    if (!q) return;
    this.router.navigate(['/search'], { queryParams: { q } });
  }

  toggleProfile() { this.showDropdown = !this.showDropdown; }
}
