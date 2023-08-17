import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country.list.component';
import { CountryDetailComponent } from './country-list/detail/country.detail.component';
import { CountryEditComponent } from './country-list/edit/country.edit.component';
import { CountryComponent } from './country.component';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    title: 'Country',
    children: [
      {
        path: 'add',
        component: AddCountryComponent,
        title: 'Add Country'
      },
      {
        path: 'list',
        component: CountryListComponent,
        title: 'Country List',
        children: [
          {
            path: 'view/:country-id',
            component: CountryDetailComponent,
            title: 'View Country'
          },
          {
            path: 'edit/:country-id',
            component: CountryEditComponent,
            title: 'Edit Country'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
