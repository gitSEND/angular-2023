import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountryListComponent } from './country-list/country.list.component';
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
    CountryListComponent
  ],
  providers: [CountryService]
})
export class CountryModule {
  constructor() {
    console.log('CountryModule loaded.');
  }
}
