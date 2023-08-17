import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryEditComponent } from './country/country-list/edit/country.edit.component';
import { DialogService } from './dialog.service';

@Injectable()
export class CountryEditCanDeactivateGuard implements CanDeactivate<CountryEditComponent> {

  constructor(private dialogService: DialogService) { }

  canDeactivate(
    component: CountryEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    let url: string = state.url;
    console.log('Url: ' + url);

    if (!component.isUpdating && component.countryForm.dirty) {
      component.isUpdating = false;

      return this.dialogService.confirm('Discard changes for Country?');
    }

    return true;
  }
}
