import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Country } from './country';
import { CountryService } from './services/country.service';

export const countryDetail2Resolver: ResolveFn<Observable<Country> | null> = (route, state) => {
  const countryService = inject(CountryService);
  const router = inject(Router);

  const id = route.paramMap.get('country-id') ?? '';
  console.log('Resolving for country id:' + id);

  return countryService.getCountry(id).pipe(
    map(country => {
      if (country) {
        return of(country);
      } else {
        router.navigate(['/country/countryList']);
        return null;
      }
    }));
}
