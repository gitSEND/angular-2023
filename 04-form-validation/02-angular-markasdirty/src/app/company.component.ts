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
    compName: ['', Validators.minLength(3)],
    empNo: ['', Validators.minLength(2)],
    locations: this.formBuilder.array([
      new FormControl('', [Validators.minLength(3)]),
      new FormControl('', [Validators.minLength(3)])
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
  markDirty() {

    // this.compForm.get('compName')?.markAsDirty({ onlySelf: true });
    this.compForm.get('empNo')?.markAsDirty();
    this.compForm.get('locations')?.markAsDirty();
    // this.compForm.markAsDirty();
  }
}
