import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, catchError, of } from 'rxjs';

export const courseGuard: CanActivateFn = (route: ActivatedRouteSnapshot): any => {
  const http = inject(HttpClient);
  const router = inject(Router);
  const base = environment.apiBase;

  const id = Number(
    route.paramMap.get('id') ??
    route.paramMap.get('courseId') ??
    route.queryParamMap.get('id') ??
    route.queryParamMap.get('courseId')
  );

  if (!id) return router.createUrlTree(['/search']);

  return http.get(`${base}/courses/${id}`).pipe(
    map(() => true),
    catchError(() => of(router.createUrlTree(['/search'])))
  );
};
