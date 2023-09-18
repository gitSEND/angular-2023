import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { CompanyService } from './company.service';

export function existingLocationValidator(compService: CompanyService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    let debounceTime = 2000; //milliseconds
    return timer(debounceTime).pipe(
      switchMap(() => compService.getLocationByLocationName(control.value)),
      map((loc: string[]) => {
        console.log(loc);
        console.log(loc.length);
        return (loc && loc.length > 0) ? { "locNameExists": true } : null;
      })
    );
  };
}
