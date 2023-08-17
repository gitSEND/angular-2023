import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {routes} from './app/app-routing.module';
import {AppComponent} from './app/app.component';

// URL: https://angular.io/guide/directive-composition-api
// URL: https://www.concretepage.com/angular/angular-hostdirectives

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .catch(err => console.error(err));
