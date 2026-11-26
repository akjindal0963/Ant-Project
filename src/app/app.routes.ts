import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./site-layout/site-layout.component').then(m => m.SiteLayoutComponent), children: [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), title: 'A1 Termite & Pest Control | Melbourne' },
    { path: 'services/ant-control', loadComponent: () => import('./ant-page/ant-page.component').then(m => m.AntPageComponent), title: 'Ant Control | A1 Termite & Pest Control' },
    { path: 'services/:slug', loadComponent: () => import('./service-placeholder/service-placeholder.component').then(m => m.ServicePlaceholderComponent) }
  ] },
  { path: '**', redirectTo: '' }
];
