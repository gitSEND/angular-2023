import { NgModule, inject } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country.list.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryEditComponent } from './country-list/edit/country.edit.component';
import { CanComponentDeactivate, CanDeactivateGuard } from '../can-deactivate-guard.service';
import { CountryEditCanDeactivateGuard } from '../country-edit-can-deactivate-guard.service';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      {
        path: 'add',
        component: AddCountryComponent,
        canDeactivate: [
          (component: CanComponentDeactivate, state: RouterStateSnapshot) =>
            inject(CanDeactivateGuard).canDeactivate(component, state)
        ]
      },
      {
        path: 'list',
        component: CountryListComponent,
        children: [
          {
            path: 'edit/:country-id',
            component: CountryEditComponent,
            canDeactivate: [
              (component: CountryEditComponent, state: RouterStateSnapshot) =>
                inject(CountryEditCanDeactivateGuard).canDeactivate(component, state)
            ]
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
