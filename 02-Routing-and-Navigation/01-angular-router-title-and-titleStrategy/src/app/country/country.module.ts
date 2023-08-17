import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';

import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country.list.component';
import { CountryDetailComponent } from './country-list/detail/country.detail.component';
import { CountryEditComponent } from './country-list/edit/country.edit.component';
import { CountryComponent } from './country.component';
import { CountryService } from './service/country.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryComponent,
    CountryListComponent,
    CountryEditComponent,
    CountryDetailComponent,
    AddCountryComponent
  ],
  providers: [CountryService]
})
export class CountryModule { }
