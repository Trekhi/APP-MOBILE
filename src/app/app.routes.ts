import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'personaje-list',
    loadComponent: () => import('./components/personaje-list/personaje-list.page').then( m => m.PersonajeListPage)
  },

];
