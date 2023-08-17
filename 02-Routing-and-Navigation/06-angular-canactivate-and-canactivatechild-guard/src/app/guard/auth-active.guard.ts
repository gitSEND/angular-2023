import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/services/auth.service';

export const authActiveGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const url: string = state.url;
  console.log("🚀 ~ file: auth-active.guard.ts:10 ~ url:", url)

  if (authService.isUserLoggedIn()) {
    return true;
  }

  authService.setRedirectUrl(url);
  router.navigate([authService.getLoginUrl()]);

  return false;
};
