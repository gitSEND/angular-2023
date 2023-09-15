import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(confirmPassword: string): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    const password: string = control.value;
    const isInValid = (password !== confirmPassword) ? true : false;

    return isInValid ? { 'cnfPassword': { value: 'Invalid' } } : null;
  };
}
