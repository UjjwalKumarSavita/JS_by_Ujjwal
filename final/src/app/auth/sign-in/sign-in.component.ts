// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { AuthService, Role } from '../../core/auth.service';

// @Component({
//   selector: 'app-sign-in',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink],
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.scss']
// })
// export class SignInComponent {
//   private fb = inject(FormBuilder);
//   private auth = inject(AuthService);
//   private router = inject(Router);

//   form = this.fb.nonNullable.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]],
//     role: ['learner' as Role]      // choose 'author' to access /author
//   });

//   loading = false;

//   onSubmit() {
//     if (this.form.invalid || this.loading) return;
//     this.loading = true;

//     const { email, role } = this.form.getRawValue();
//     const name = email.split('@')[0];

//     // store a session so guards pass
//     this.auth.signIn({ id: 'u_' + Date.now(), name, role });

//     // go to dashboard (or use a redirect param if you add one)
//     this.router.navigateByUrl('/dashboard');
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  identifier = '';           // email OR username
  password = '';
  showPassword = false;
  remember = false;
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('remember.identifier');
    if (saved) { this.identifier = saved; this.remember = true; }
  }

  toggleShow() { this.showPassword = !this.showPassword; }

  submit() {
    this.error = '';
    if (!this.identifier || !this.password) {
      this.error = 'Please enter username/email and password.';
      return;
    }
    this.loading = true;
    this.auth.signIn(this.identifier, this.password).subscribe({
      next: () => {
        this.loading = false;
        if (this.remember) localStorage.setItem('remember.identifier', this.identifier);
        else localStorage.removeItem('remember.identifier');
        this.router.navigateByUrl('/dashboard');   // redirect to dashboard
      },
      error: (e) => {
        this.loading = false;
        this.error = e?.message || 'Sign in failed.';
      }
    });
  }
}
