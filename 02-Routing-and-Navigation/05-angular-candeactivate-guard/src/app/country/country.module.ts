import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country.list.component';
import { CountryEditComponent } from './country-list/edit/country.edit.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryService } from './services/country.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryComponent,
    AddCountryComponent,
    CountryListComponent,
    CountryEditComponent
  ],
  providers: [CountryService]
})
export class CountryModule { }
