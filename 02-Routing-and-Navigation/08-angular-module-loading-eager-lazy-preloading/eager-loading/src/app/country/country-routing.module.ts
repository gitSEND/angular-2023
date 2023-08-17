import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country.list.component';
import { CountryComponent } from './country.component';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      {
        path: 'country-list',
        component: CountryListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
