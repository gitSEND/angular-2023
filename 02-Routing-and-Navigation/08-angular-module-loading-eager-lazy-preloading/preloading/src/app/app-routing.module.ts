import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { AddressComponent } from './address.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(mod => mod.CountryModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule)
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
