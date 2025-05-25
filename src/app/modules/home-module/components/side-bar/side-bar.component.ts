import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [
    RouterModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  menuList: {
    id: number;
    icon: string;
    label: string;
    url: string;
  }[] = [
      {
        id: 1,
        icon: 'assets/images/icons/svg/dashboard_24px_outlined_white.svg',
        label: 'Dashboard',
        url: '/admin/dashboard'
      },
      {
        id: 2,
        icon: 'assets/images/icons/svg/assignment_ind_24px_outlined_white.svg',
        label: 'User Management',
        url: '/admin/user-management'
      },
    ]
}
