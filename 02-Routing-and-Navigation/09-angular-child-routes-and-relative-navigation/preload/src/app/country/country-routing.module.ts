import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country.list.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryDetailComponent } from './country-list/detail/country.detail.component';
import { CountryEditComponent } from './country-list/edit/country.edit.component';

const countryRoutes: Routes = [
	{
		path: '',
		component: CountryComponent,
		children: [
			{
				path: 'add',
				component: AddCountryComponent
			},
			{
				path: 'list',
				component: CountryListComponent,
				children: [
					{
						path: 'view/:country-id',
						component: CountryDetailComponent
					},
					{
						path: 'edit/:country-id',
						component: CountryEditComponent
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
