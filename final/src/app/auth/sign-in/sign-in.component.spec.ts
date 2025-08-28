import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  identifier = '';  // email OR username
  password = '';
  showPassword = false;
  remember = false;
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('remember.identifier');
    if (saved) { this.identifier = saved; this.remember = true; }
  }

  toggleShow() { this.showPassword = !this.showPassword; }

  async submit() {
    this.error = '';
    if (!this.identifier || !this.password) {
      this.error = 'Please enter username/email and password.';
      return;
    }
    try {
      this.loading = true;
      await this.auth.signIn(this.identifier, this.password);
      if (this.remember) localStorage.setItem('remember.identifier', this.identifier);
      else localStorage.removeItem('remember.identifier');
      this.router.navigateByUrl('/dashboard'); // ← redirect to dashboard after success
    } catch (e: any) {
      this.error = e?.message || 'Sign in failed.';
    } finally {
      this.loading = false;
    }
  }
}
