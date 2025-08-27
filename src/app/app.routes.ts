import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments/appointments.component';
import { AnalyticsComponent } from './analytics/analytics/analytics.component';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'analytics', component: AnalyticsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
