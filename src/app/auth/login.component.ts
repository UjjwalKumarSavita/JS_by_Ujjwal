import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    CommonModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private sb: MatSnackBar) {
    this.form = this.fb.group({ username: ['', Validators.required], password: ['', Validators.required] });
  }
  submit() {
    const { username, password } = this.form.value as { username: string; password: string; };
    if (!username || !password || !this.auth.login(username, password)) {
      this.sb.open('Invalid credentials', 'Dismiss', { duration: 2500 });
    }
  }
}
