import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeModuleComponent } from './modules/home-module/home-module.component';
import { LoginModuleComponent } from './modules/login-module/login-module.component';
import { RegisterModuleComponent } from './modules/register-module/register-module.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: HomeModuleComponent,
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
    component: LoginModuleComponent
  },
  {
    path: 'register',
    component: RegisterModuleComponent
  }
];
