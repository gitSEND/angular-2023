import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country.list.component';
import { CountryDetailComponent } from './country-list/detail/country.detail.component';
import { CountryDetailResolver } from './country-detail.resolver';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
      {
        path: 'countryList',
        component: CountryListComponent,
        children: [
          {
            path: 'detail/:country-id',
            component: CountryDetailComponent,
            resolve: {
              countryDetail: CountryDetailResolver
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule],
  providers: [CountryDetailResolver]
})
export class CountryRoutingModule { }
