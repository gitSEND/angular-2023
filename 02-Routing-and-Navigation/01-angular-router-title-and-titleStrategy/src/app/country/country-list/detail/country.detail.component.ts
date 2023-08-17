import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Country } from '../../country';
import { CountryService } from '../../service/country.service';

@Component({
  templateUrl: './country.detail.component.html'
})
export class CountryDetailComponent implements OnInit {
  country = {} as Country | undefined;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
    ).subscribe(country => this.country = country);
  }
}
