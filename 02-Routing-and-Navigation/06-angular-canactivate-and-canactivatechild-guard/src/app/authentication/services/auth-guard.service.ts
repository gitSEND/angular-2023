import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log("🚀 ~ file: auth-guard.service.ts:12 ~ AuthGuardService ~ canActivate ~ url:", url)

    if (this.authService.isUserLoggedIn()) {
      return true;
    }

    this.authService.setRedirectUrl(url);
    this.router.navigate([this.authService.getLoginUrl()]);

    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const loggedInUser = this.authService.getLoggedInUser();

    if (loggedInUser.role === 'ADMIN') {
      return true;
    } else {
      console.log('Unauthorized to open link: ' + state.url);
      return false;
    }
  }
}
