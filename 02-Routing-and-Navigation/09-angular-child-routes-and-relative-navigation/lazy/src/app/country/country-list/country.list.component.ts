import { Component, OnInit } from '@angular/core';

import { CountryService } from '../service/country.service';
import { Country } from '../country';

@Component({
  templateUrl: './country.list.component.html'
})
export class CountryListComponent implements OnInit {
  countries: Promise<Country[]>;

  constructor(private countryService: CountryService) {
    this.countries = this.countryService.getCountries();
  }

  ngOnInit() { }
}
