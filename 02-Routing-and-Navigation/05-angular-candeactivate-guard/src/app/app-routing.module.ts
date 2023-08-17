import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { CountryEditCanDeactivateGuard } from './country-edit-can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
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
  ],
  providers: [
    CanDeactivateGuard,
    CountryEditCanDeactivateGuard,
  ],
})
export class AppRoutingModule { }
