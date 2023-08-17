import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Country } from '../../country';
import { CountryService } from '../../service/country.service';

@Component({
  templateUrl: './country.edit.component.html'
})
export class CountryEditComponent implements OnInit {
  country = {} as Country;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
    ).subscribe(country => {
      this.country = country ?? {} as Country;
      this.setFormValues();
    });
  }
  countryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    currency: new FormControl()
  });
  setFormValues() {
    this.countryForm.setValue({
      name: this.country.countryName,
      capital: this.country.capital, currency: this.country.currency
    });
  }
  onFormSubmit() {
    this.country.countryName = this.countryForm.get('name')?.value;
    this.country.capital = this.countryForm.get('capital')?.value;
    this.country.currency = this.countryForm.get('currency')?.value;

    this.countryService.updateCountry(this.country)
      .then(() =>
        this.router.navigate(['../../'], { relativeTo: this.route })
      );
  }
}
