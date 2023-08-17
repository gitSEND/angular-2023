import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country.list.component';

const countryRoutes: Routes = [
  {
    path: '',
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
