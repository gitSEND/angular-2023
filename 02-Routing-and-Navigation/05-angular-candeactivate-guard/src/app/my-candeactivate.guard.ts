import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

export const myCandeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate, currentRoute, currentState, nextState) => {
  const url: string = currentState.url;
  console.log('Url: ' + url);

  return component.canDeactivate ? component.canDeactivate() : true;
};
