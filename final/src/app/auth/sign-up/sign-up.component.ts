// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { AuthService, Role } from '../../core/auth.service';

// @Component({
//   selector: 'app-sign-up',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink],
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss']
// })
// export class SignUpComponent {
//   private fb = inject(FormBuilder);
//   private auth = inject(AuthService);
//   private router = inject(Router);

//   form = this.fb.nonNullable.group({
//     name: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]],
//     role: ['learner' as Role]
//   });

//   onSubmit() {
//     if (this.form.invalid) return;
//     const v = this.form.getRawValue();
//     this.auth.signIn({ id: 'u_' + Date.now(), name: v.name, role: v.role });
//     this.router.navigateByUrl('/dashboard');
//   }
// }



import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
selector: 'app-sign-up',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
private auth = inject(AuthService);
private router = inject(Router);


fullName = '';
email = '';
username = '';
password = '';


async submit() {
const created = await this.auth['register']({
fullName: this.fullName,
email: this.email,
username: this.username,
password: this.password,
role: 'Learner'
});
if (created) {
await this.auth['login'](this.email, this.password);
this.router.navigateByUrl('/');
}
}
}