import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
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
];
