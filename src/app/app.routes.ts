import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { ErrorModuleFederationComponent } from './shared/components/error-module-federation/error-module-federation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadComponent: () =>
      import("./modules/home-module/home-module.component")
        .then((m) => m.HomeModuleComponent)
        .catch(() => ErrorModuleFederationComponent),
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
            .then((m) => m.AppComponent)
            .catch(() => ErrorModuleFederationComponent)
      },
      {
        path: 'profile',
        loadComponent: () =>
          loadRemoteModule('profile-module', './Component')
            .then((m) => m.AppComponent)
            .catch(() => ErrorModuleFederationComponent)
      },
      {
        path: 'report',
        loadComponent: () =>
          loadRemoteModule('report-module', './Component')
            .then((m) => m.AppComponent)
            .catch(() => ErrorModuleFederationComponent)
      },
      {
        path: 'user-management',
        loadComponent: () =>
          loadRemoteModule('user-management-module', './Component')
            .then((m) => m.AppComponent)
            .catch(() => ErrorModuleFederationComponent)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () =>
      import("./modules/login-module/login-module.component")
        .then((m) => m.LoginModuleComponent)
        .catch(() => ErrorModuleFederationComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import("./modules/register-module/register-module.component")
        .then((m) => m.RegisterModuleComponent)
        .catch(() => ErrorModuleFederationComponent)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
