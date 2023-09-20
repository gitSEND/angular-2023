import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { UserService } from './user-service';

export function existingUsernameValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.unameAlreadyExists(control.value).pipe(
      map(exist => { return exist ? { "usernameExists": true } : null; })
    );
  };
}
