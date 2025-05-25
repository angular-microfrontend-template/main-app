import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-register-module',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [LocalStorageService],
  templateUrl: './register-module.component.html',
  styleUrl: './register-module.component.css'
})
export class RegisterModuleComponent {
  registerForm!: FormGroup;
  isShowPassword: Boolean = false;
  showPasswordValueChanges!: Subscription | undefined;
  isSubmitLoading: Boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      showPassword: [false]
    });

    this.showPasswordValueChanges = this.registerForm.get('showPassword')?.valueChanges.subscribe((value) => {
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
    if (!this.registerForm.invalid) {
      this.localStorageService.saveData('access_token', {
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value
      });

      setTimeout(() => {
        this.router.navigate(['/']);
        this.isSubmitLoading = false;
      }, 3000)
    }
  }
}
