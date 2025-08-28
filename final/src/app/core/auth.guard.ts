import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { AuthService } from '../auth/auth.service';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (_route, state): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) return true;

  // redirect to sign-in and preserve where the user tried to go
  return router.createUrlTree(['/sign-in'], { queryParams: { returnUrl: state.url } });
};
