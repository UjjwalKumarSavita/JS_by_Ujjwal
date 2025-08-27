import { Component, computed, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isLoginRoute = signal(false);

  constructor(private router: Router, private auth: AuthService) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isLoginRoute.set(e.urlAfterRedirects.includes('/login'));
      }
    });
  }

  showTopbar = computed(() => !this.isLoginRoute());

  logout() {
    this.auth.logout();
  }
}
