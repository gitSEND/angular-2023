import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard {
  canDeactivate(component: CanComponentDeactivate, state: RouterStateSnapshot) {
    let url: string = state.url;
    console.log('Url: ' + url);
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
