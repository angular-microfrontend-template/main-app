import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-module',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [LocalStorageService],
  templateUrl: './login-module.component.html',
  styleUrl: './login-module.component.css'
})
export class LoginModuleComponent {
  loginForm!: FormGroup;
  isShowPassword: Boolean = false;
  showPasswordValueChanges!: Subscription | undefined;
  isSubmitLoading: Boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      showPassword: [false]
    });

    this.showPasswordValueChanges = this.loginForm.get('showPassword')?.valueChanges.subscribe((value) => {
      this.isShowPassword = value;
    });
  }

  ngOnDestroy(): void {
    if (this.showPasswordValueChanges) {
      this.showPasswordValueChanges.unsubscribe();
    }
  }

  onSubmit(): void {
    this.isSubmitLoading = true;
    if (!this.loginForm.invalid) {
      this.localStorageService.saveData('access_token', {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      });

      setTimeout(() => {
        this.router.navigate(['/']);
        this.isSubmitLoading = false;
      }, 3000)
    }
  }
}
