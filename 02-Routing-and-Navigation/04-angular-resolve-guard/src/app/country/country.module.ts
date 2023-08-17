import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountryListComponent } from './country-list/country.list.component';
import { CountryDetailComponent } from './country-list/detail/country.detail.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryService } from './services/country.service';

@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryComponent,
    CountryListComponent,
    CountryDetailComponent
  ],
  providers: [CountryService]
})
export class CountryModule { }
