import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/routes/routes.constants';
import { PersonService } from './app/services/person.service';

// https://angular.io/guide/standalone-components
// https://www.concretepage.com/angular/angular-standalone-lazy-loading

bootstrapApplication(AppComponent, {
  providers: [
    PersonService,
    provideRouter(ROUTES)
  ]
})
  .catch(err => console.error(err));
