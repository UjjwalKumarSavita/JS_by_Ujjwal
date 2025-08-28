import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, switchMap, throwError } from 'rxjs';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;       // demo: plain text in db.json
  fullName?: string;
  role?: 'Admin' | 'Author' | 'Learner';
  avatarUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'http://localhost:3000';
  user = signal<User | null>(this.restore());

  constructor(private http: HttpClient) {}

  /** identifier = email OR username */
  signIn(identifier: string, password: string) {
    const byEmail$ = this.http.get<User[]>(`${this.base}/users?email=${encodeURIComponent(identifier)}`);
    return byEmail$.pipe(
      switchMap(list => list.length ? of(list[0])
        : this.http.get<User[]>(`${this.base}/users?username=${encodeURIComponent(identifier)}`)
            .pipe(map(u => u[0]))),
      switchMap((u) => {
        if (!u) return throwError(() => new Error('User not found.'));
        if (u.password !== password) return throwError(() => new Error('Invalid credentials.'));
        // persist a lightweight session
        localStorage.setItem('auth.user', JSON.stringify({
          id: u.id, username: u.username, email: u.email, fullName: u.fullName, role: u.role
        }));
        this.user.set(u);
        return of(u);
      })
    );
  }

  signOut() { localStorage.removeItem('auth.user'); this.user.set(null); }

  isAuthenticated() { return !!this.user(); }

  private restore(): User | null {
    const raw = localStorage.getItem('auth.user');
    return raw ? JSON.parse(raw) as User : null;
  }
}
