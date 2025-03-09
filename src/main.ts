import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular'; // Importa Storage
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

//LO INYECTAMOS GLOBAL PARA EL ACCESO DE STORAGE EN TODO EL APARTADO DEL CODIGO

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    { provide: Storage, useFactory: () => new Storage() }, //Creamos una inyeción para la utilización del storage en todo el apartado del proyecto.
  ],
});
