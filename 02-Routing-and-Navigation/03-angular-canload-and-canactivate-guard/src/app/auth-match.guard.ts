import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './authentication/services/auth.service';

export const authMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const url = route.path;
  console.log('Url:' + url);

  if (authService.isUserLoggedIn()) {
    return true;
  }

  authService.setRedirectUrl(url);
  router.navigate([authService.getLoginUrl()]);

  return false;
};
