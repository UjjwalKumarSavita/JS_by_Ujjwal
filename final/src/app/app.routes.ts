// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailComponent } from './course/course-detail.component';
import { SearchResultsComponent } from './search/search-results.component';
import { LearnComponent } from './player/learn.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

import { AuthorCoursesComponent } from './author/author-courses.component';
import { CourseWizardComponent } from './author/create-course/course-wizard.component';

// import { authGuard } from './core/guards/auth.guard';
import { authGuard } from './core/auth.guard';
import { authorGuard } from './core/guards/role.guard';
import {}
import { courseGuard } from './core/guards/course.guard';
import { enrollmentGuard } from './core/guards/enrollment.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'course/:id', component: CourseDetailComponent, canActivate: [authGuard, courseGuard] },
  { path: 'search', component: SearchResultsComponent, canActivate: [authGuard] },

  // only allow learning if course exists AND user is enrolled
  { path: 'learn/:courseId/lecture/:lectureId', component: LearnComponent, canActivate: [authGuard, courseGuard, enrollmentGuard] },

  { path: 'my-courses', component: MyCoursesComponent, canActivate: [authGuard] },

  { path: 'author', component: AuthorCoursesComponent, canActivate: [authGuard, authorGuard] },
  { path: 'author/create', component: CourseWizardComponent, canActivate: [authGuard, authorGuard] },

  { path: '**', redirectTo: 'sign-in' },
];
