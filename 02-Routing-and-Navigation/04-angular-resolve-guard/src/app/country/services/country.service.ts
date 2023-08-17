import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../country';

const COUNTRIES: Country[] = [
  { "countryId": "1", "name": "India", "capital": "New Delhi", "currency": "INR" },
  { "countryId": "2", "name": "China", "capital": "Beijing", "currency": "RMB" }
];
const countriesObservable = of(COUNTRIES);
const countriesToDisplayObservable =
  of(COUNTRIES.concat({ "countryId": "3", "name": "UK", "capital": "London", "currency": "GBP" }));

@Injectable()
export class CountryService {
  getCountries(): Observable<Country[]> {
    return countriesToDisplayObservable;
  }

  getCountry(id: string): Observable<Country | undefined> {
    return countriesObservable.pipe(
      map(countries => countries.find(country => country.countryId === id))
    );
  }
}
