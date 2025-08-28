import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { AuthService } from './services/auth.service';
export const authorGuard: CanActivateFn = (): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const u = auth.user();

  if (u && (u.role === 'Author' || u.role === 'Admin')) return true;

  // not allowed → send to dashboard (or sign-in if you prefer)
  return router.createUrlTree(['/dashboard']);
};
