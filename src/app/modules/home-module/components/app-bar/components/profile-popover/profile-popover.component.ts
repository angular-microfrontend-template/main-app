import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../../shared/directives/click-outside/click-outside.directive';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../../../../core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-profile-popover',
  imports: [
    CommonModule,
    ClickOutsideDirective,
    RouterModule
  ],
  providers: [LocalStorageService],
  templateUrl: './profile-popover.component.html',
  styleUrl: './profile-popover.component.css',
})
export class ProfilePopoverComponent {
  isOpenDropdown: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) { }

  toggleDropdown(): void {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  closeDropdown(): void {
    this.isOpenDropdown = false;
  }

  goToProfilePage(): void {
    this.router.navigate(['/admin/profile']);
    this.closeDropdown();
  }

  logout(): void {
    this.localStorageService.clearData();
    this.closeDropdown();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500)
  }
}
