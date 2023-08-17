import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { CountryEditCanDeactivateGuard } from '../country-edit-can-deactivate-guard.service';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country.list.component';
import { CountryEditComponent } from './country-list/edit/country.edit.component';
import { CountryComponent } from './country.component';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      {
        path: 'add',
        component: AddCountryComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'list',
        component: CountryListComponent,
        children: [
          {
            path: 'edit/:country-id',
            component: CountryEditComponent,
            canDeactivate: [CountryEditCanDeactivateGuard]
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
