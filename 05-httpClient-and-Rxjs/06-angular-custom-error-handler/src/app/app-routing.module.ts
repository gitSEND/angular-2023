import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountryComponent } from './country/add-country.component';
import { AddPersonComponent } from './person/add-person.component';
import { GlobalErrorComponent } from './global-error.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: 'country',
    component: AddCountryComponent
  },
  {
    path: 'person',
    component: AddPersonComponent
  },
  {
    path: 'error',
    component: GlobalErrorComponent
  },
  {
    path: '',
    redirectTo: '/country',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
