import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { CompanyService } from './company.service';

export function existingCompanyValidator(compService: CompanyService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    let debounceTime = 2000; //milliseconds
    return timer(debounceTime).pipe(
      switchMap(() => compService.getCompanyByCompName(control.value)),
      map((comps: string[]) => {
        console.log(comps);
        console.log(comps.length);

        return (comps && comps.length > 0) ? { "compNameExists": true } : null;
      })
    );
  };
}
