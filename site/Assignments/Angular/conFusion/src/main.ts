// Import module for angular library
import { enableProdMode } from '@angular/core';
// Taking root module as a parameter (bootstrap Angular app)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Root name of the project
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

