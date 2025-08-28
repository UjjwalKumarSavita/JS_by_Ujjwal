import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export type UserRole = 'Admin' | 'Author' | 'Learner';
export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // plain for dev with json-server
  fullName?: string;
  role?: UserRole;
  avatarUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  [x: string]: any;
  private base = environment.apiBase;
  user = signal<User | null>(this.restore());

  constructor(private http: HttpClient) {}

  /** identifier = email OR username; checks /users then stores session, returns user or throws */
  async signIn(identifier: string, password: string): Promise<User> {
    // Try by email first
    const byEmail = await firstValueFrom(this.http.get<User[]>(`${this.base}/users`, { params: { email: identifier } }));
    let u = byEmail?.[0];

    // Fallback by username
    if (!u) {
      const byUser = await firstValueFrom(this.http.get<User[]>(`${this.base}/users`, { params: { username: identifier } }));
      u = byUser?.[0];
    }

    if (!u) throw new Error('User not found.');

    // DEV ONLY: simple match with db.json password
    // If your db.json has "password": "hashed_password", you must type exactly that to sign in.
    if ((u.password || '') !== password) {
      throw new Error('Invalid credentials.');
    }

    // Persist a lightweight session (no token, json-server dev style)
    const session: User = { id: u.id, username: u.username, email: u.email, fullName: u.fullName, role: u.role, avatarUrl: u.avatarUrl };
    localStorage.setItem('auth.user', JSON.stringify(session));
    this.user.set(session);
    return session;
  }

  signOut() {
    localStorage.removeItem('auth.user');
    this.user.set(null);
  }

  isAuthenticated() { return !!this.user(); }

  private restore(): User | null {
    try { return JSON.parse(localStorage.getItem('auth.user') || 'null'); } catch { return null; }
  }
}
