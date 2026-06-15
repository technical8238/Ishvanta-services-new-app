import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.HomePage) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.AboutPage) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then((m) => m.ServicesPage) },
  { path: 'our-work', loadComponent: () => import('./pages/our-work/our-work').then((m) => m.OurWorkPage) },
  { path: 'reviews', loadComponent: () => import('./pages/reviews/reviews').then((m) => m.ReviewsPage) },
  { path: 'service-areas', loadComponent: () => import('./pages/service-areas/service-areas').then((m) => m.ServiceAreasPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage) },
  { path: '**', redirectTo: '' }
];
