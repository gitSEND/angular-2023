import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../services/country.service';
import { Country } from '../country';

@Component({
  templateUrl: './country.list.component.html'
})
export class CountryListComponent implements OnInit {
  countries: Observable<Country[]>;

  constructor(private countryService: CountryService) {
    this.countries = this.countryService.getCountries();
  }

  ngOnInit() { }
}
