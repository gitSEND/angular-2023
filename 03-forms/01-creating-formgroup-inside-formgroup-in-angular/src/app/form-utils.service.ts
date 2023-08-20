import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormUtilsService {
  constructor() { }

  makeNonNullableFormControl<T>(value: T, validator: ValidatorFn[]): FormControl<T> {
    return new FormControl(value, { nonNullable: true, validators: [...validator] })
  }

  makeFormControl<T>(value: T | null, validator: ValidatorFn): FormControl<T | null> {
    return new FormControl(value, validator);
  }
}


export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};
