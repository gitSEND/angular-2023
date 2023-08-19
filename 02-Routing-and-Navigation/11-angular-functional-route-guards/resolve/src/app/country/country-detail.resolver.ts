import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CountryService } from './services/country.service';
import { Country } from './country';

@Injectable()
export class CountryDetailResolver implements Resolve<Country | null> {
  constructor(private countryService: CountryService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country | null> {
    let id = route.paramMap.get('country-id') ?? '';
    console.log('Resolving for country id:' + id);

    return this.countryService.getCountry(id).pipe(
      map(country => {
        if (country) {
          return country;
        } else {
          this.router.navigate(['/country/countryList']);
          return null;
        }
      }));
  }
}
