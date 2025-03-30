import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';


export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('../components/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'tab5',
        loadComponent: () =>
          import('../components/notifications/notifications.component').then((m) => m.NotificationsComponent),
      },
      {
        path: 'tab6',
        loadComponent: () => import('../components/favorites/favorites.component').then((m) => m.FavoritesComponent),
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
