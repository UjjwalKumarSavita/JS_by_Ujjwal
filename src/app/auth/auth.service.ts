import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

type Creds = { username: string; password: string; role: 'admin'|'doctor'|'patient' };

const DEMO: Creds[] = [
  { username: 'admin',  password: 'password', role: 'admin'  },
  { username: 'doctor', password: 'password', role: 'doctor' },
  { username: 'patient',password: 'password', role: 'patient'}
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSig = signal<User | null>(this.restore());

  constructor(private router: Router) {}

  login(username: string, password: string) {
    const match = DEMO.find(c => c.username === username && c.password === password);
    if (!match) return false;

    const user: User = { name: this.capitalize(username), role: match.role };
    localStorage.setItem('hc_user', JSON.stringify(user));
    this.userSig.set(user);
    this.router.navigateByUrl('/dashboard');
    return true;
  }

  logout() {
    localStorage.removeItem('hc_user');
    this.userSig.set(null);
    this.router.navigateByUrl('/login');
  }

  isAuthed() { return !!this.userSig(); }
  currentUser() { return this.userSig(); }

  private restore(): User | null {
    const raw = localStorage.getItem('hc_user');
    return raw ? JSON.parse(raw) as User : null;
  }

  private capitalize(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }
}
