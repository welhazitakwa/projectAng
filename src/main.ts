import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
 // indique quel module je vais l'afficher au demarrage de l'application (AppModule)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
