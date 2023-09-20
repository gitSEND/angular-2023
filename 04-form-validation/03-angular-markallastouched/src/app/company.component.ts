import { Component } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CompanyService } from './company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './company.component.html'
})
export class CompanyComponent {
  formSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private compService: CompanyService) {
  }
  compForm: FormGroup = this.formBuilder.group({
    compName: ['', Validators.required],
    ceo: ['', Validators.required],
    locations: this.formBuilder.array([
      new FormControl('', [Validators.required]),
      new FormControl('', [Validators.required]),
    ])
  });

  get locations(): FormArray {
    return this.compForm.get('locations') as FormArray;
  }

  onFormSubmit() {
    if (this.compForm.valid) {
      this.compService.saveComp(this.compForm.value);
      this.formSubmitted = true;
      this.compForm.reset();
    } else {
      this.compForm.markAllAsTouched();
      this.formSubmitted = false;
    }
  }
}
