import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryService } from '../service/country.service';
import { Country } from '../country';
@Component({
  templateUrl: './add-country.component.html'
})
export class AddCountryComponent {
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  countryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    currency: new FormControl()
  });

  onFormSubmit() {
    const name = this.countryForm.get('name')?.value;
    const capital = this.countryForm.get('capital')?.value;
    const currency = this.countryForm.get('currency')?.value;

    const country = new Country(0, name, capital, currency);

    this.countryService.addCountry(country)
      .then(data =>
        this.router.navigate(['../list/view', data.countryId], { relativeTo: this.route })
      );
  }
}
