import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http'; // 🔹 Importa provideHttpClient

//DEBIDO A QUE ESTOY USANDO LA CONFIGURACIÓN DE STALONE, LA INYECCIÓN DE DEPENDENCIAS 
//LA DEBO INSTANCIAR EN EL MAIN.TS

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(), // 🔹 Agrega HttpClient como provider
  ],
});
