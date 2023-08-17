import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from './services/user';

@Component({
  selector: 'logout',
  template: `
    Logged In: {{ loggedInUser.username }} | {{ loggedInUser.role }} |
    <button input='input' (click)="logout()">Logout</button>
	`
})
export class LogoutComponent {
  loggedInUser = {} as User;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
  logout() {
    this.authService.logoutUser();
    this.router.navigate([this.authService.getLoginUrl()]);
  }
}
