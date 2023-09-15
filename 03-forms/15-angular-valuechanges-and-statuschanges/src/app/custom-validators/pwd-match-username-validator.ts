import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function pwdMatchUsernameValidator(username: string): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    const password: string = control.value;
    const isInValid = (password === username) ? true : false;

    return isInValid ? { 'matchForUsername': { value: 'Invalid' } } : null;
  };
}
