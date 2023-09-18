import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CompanyService } from './company.service';
import { CommonModule } from '@angular/common';
import { existingCompanyValidator } from './existing-compname-validator';
import { existingLocationValidator } from './existing-location-validator';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private compService: CompanyService) {
  }

  ngOnInit(): void {
    this.compForm.get('compName')?.valueChanges.subscribe(
      compName => {
        console.log('Company name changed:' + compName);
      }
    );

    this.compForm.get('compName')?.statusChanges.subscribe(
      status => {
        console.log('Control status: ' + status);
      }
    );

    this.compForm.valueChanges.subscribe(() => {
      console.log(this.compForm);

    })
  }

  compForm: FormGroup = this.formBuilder.group({
    // compName: ['', [Validators.minLength(3)]],
    compName: ['', [Validators.minLength(3)], [existingCompanyValidator(this.compService)]],
    locations: this.formBuilder.array([
      new FormControl('', [Validators.minLength(2)], [existingLocationValidator(this.compService)]),
      new FormControl('', [Validators.minLength(2)], [existingLocationValidator(this.compService)])
    ])
  });

  get locations(): FormArray {
    return this.compForm.get('locations') as FormArray;
  }

  onFormSubmit() {
    this.compService.saveComp(this.compForm.value);
    this.formSubmitted = true;
    this.compForm.reset();
  }

  markPending() {
    this.compForm.get('compName')?.markAsPending({ onlySelf: false });
    this.compForm.get('locations')?.markAsPending();
    //this.compForm.markAsPending();
  }
}
