import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
import { environment } from '../../environments/environment';
import { map, catchError, of } from 'rxjs';

export const enrollmentGuard: CanActivateFn = (route: ActivatedRouteSnapshot): any => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const http = inject(HttpClient);
  const base = environment.apiBase;

  const user = auth.user();
  if (!user) return router.createUrlTree(['/sign-in'], { queryParams: { returnUrl: location.pathname + location.search } });

  const courseId = Number(route.paramMap.get('courseId') ?? route.queryParamMap.get('courseId'));
  if (!courseId) return router.createUrlTree(['/dashboard']);

  // json-server query (array response). We allow if at least one enrollment matches.
  return http.get<any[]>(`${base}/userEnrollments`, {
    params: { userId: String(user.id), courseId: String(courseId) }
  }).pipe(
    map(list => (Array.isArray(list) && list.length > 0) ? true : router.createUrlTree([`/course/${courseId}`])),
    catchError(() => of(router.createUrlTree(['/dashboard'])))
  );
};
