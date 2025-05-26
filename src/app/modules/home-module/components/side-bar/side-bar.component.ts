import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
    children: {
      id: number;
      icon: string;
      label: string;
      url: string;
    }[];
  }[] = [
      {
        id: 1,
        icon: 'assets/images/icons/svg/dashboard_24px_outlined_white.svg',
        label: 'Dashboard',
        url: '/admin/dashboard',
        children: []
      },
      {
        id: 2,
        icon: 'assets/images/icons/svg/assessment_24px_outlined_white.svg',
        label: 'Report',
        url: '/admin/report',
        children: []
      },
      {
        id: 3,
        icon: 'assets/images/icons/svg/assignment_ind_24px_outlined_white.svg',
        label: 'User Management',
        url: '/admin/user-management',
        children: []
      },
    ]

  constructor(
    private readonly router: Router
  ) { }

  isRouteActive(route: string): boolean {
    return Boolean(this.router.url == route);
  }

  goToPage(url: string): void {
    this.router.navigate([url]);
  }
}
