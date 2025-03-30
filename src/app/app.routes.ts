import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'header',
    loadComponent: () => import('./components/header/header.component').then( m => m.HeaderComponent)
  },
  {
    path: 'footer',
    loadComponent: () => import('./components/footer/footer.component').then( m => m.FooterComponent)
  },



];
