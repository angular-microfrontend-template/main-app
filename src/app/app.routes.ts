import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadComponent: () => import("./modules/home-module/home-module.component").then((m) => m.HomeModuleComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          loadRemoteModule('dashboard-module', './Component')
            .then((m) => m.AppComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          loadRemoteModule('profile-module', './Component')
            .then((m) => m.AppComponent),
      },
      {
        path: 'user-management',
        loadComponent: () =>
          loadRemoteModule('user-management-module', './Component')
            .then((m) => m.AppComponent),
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import("./modules/login-module/login-module.component").then((m) => m.LoginModuleComponent)
  },
  {
    path: 'register',
    loadComponent: () => import("./modules/register-module/register-module.component").then((m) => m.RegisterModuleComponent)
  }
];
