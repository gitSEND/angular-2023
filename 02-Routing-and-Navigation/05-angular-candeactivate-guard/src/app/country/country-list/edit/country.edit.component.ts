import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../country';
import { CountryService } from '../../services/country.service';

@Component({
  templateUrl: './country.edit.component.html'
})
export class CountryEditComponent implements OnInit {
  country = {} as Country;
  countryForm = {} as FormGroup;
  isUpdating = false;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
    ).subscribe(country => {
      this.country = country ?? {} as Country;
      this.createForm(country);
    });
  }

  createForm(country: Country | undefined) {
    this.countryForm = this.formBuilder.group({
      name: country?.name,
      capital: country?.capital,
      currency: country?.currency
    });
  }

  onFormSubmit() {
    this.isUpdating = true;
    this.country.name = this.countryForm.get('name')?.value;
    this.country.capital = this.countryForm.get('capital')?.value;
    this.country.currency = this.countryForm.get('currency')?.value;

    this.countryService.updateCountry(this.country)
      .subscribe(() =>
        this.router.navigate(['../../'], { relativeTo: this.route })
      );
  }
}
