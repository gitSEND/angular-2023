import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = "/api/countries";
  constructor(private http: HttpClient) { }

  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.url, country);
  }
}
