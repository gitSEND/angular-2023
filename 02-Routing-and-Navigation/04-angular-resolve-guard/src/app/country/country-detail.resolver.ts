import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country';
import { CountryService } from './services/country.service';

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
