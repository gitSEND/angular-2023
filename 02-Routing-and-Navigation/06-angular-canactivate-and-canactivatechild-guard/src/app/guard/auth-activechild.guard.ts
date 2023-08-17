import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/services/auth.service';

export const authActivechildGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const loggedInUser = authService.getLoggedInUser();

  if (loggedInUser.role === 'ADMIN') {
    return true;
  } else {
    console.log('Unauthorized to open link: ' + state.url);
    return false;
  }
};
