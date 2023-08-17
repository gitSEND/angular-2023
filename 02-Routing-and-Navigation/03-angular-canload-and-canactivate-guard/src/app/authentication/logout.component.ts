import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from './services/user';

@Component({
  selector: 'logout',
  template: `
      <div *ngIf="loggedInUser">
        Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} |
        <button input='input' (click)="logout()">Logout</button>
      </div>
	`
})
export class LogoutComponent {
  loggedInUser: User | null;

  constructor(private authService: AuthService, private router: Router) {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  ngOnInit() { }

  logout() {
    this.authService.logoutUser();
    this.loggedInUser = null;
    this.router.navigate(["/welcome"]);
  }
}
