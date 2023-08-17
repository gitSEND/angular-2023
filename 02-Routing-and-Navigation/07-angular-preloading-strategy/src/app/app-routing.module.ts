import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CustomPreloadingWithDelayStrategy } from './custom-preloading-with-delay-strategy';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(mod => mod.CountryModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule),
    data: { preload: true, delay: true }
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then(mod => mod.AddressModule),
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
        preloadingStrategy: CustomPreloadingWithDelayStrategy
      })
  ],
  exports: [
    RouterModule
  ],
  providers: [CustomPreloadingWithDelayStrategy]
})
export class AppRoutingModule { }
