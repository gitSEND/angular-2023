import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';

const USERS = [
  new User(1, 'mahesh', 'm123', 'ADMIN'),
  new User(2, 'krishna', 'k123', 'ADMIN'),
  new User(3, 'nelson', '123', 'ADMIN')
];
let usersObservable = of(USERS);

@Injectable()
export class AuthService {
  private redirectUrl: string | undefined = '/';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  private loggedInUser: User | null = null;

  getAllUsers(): Observable<User[]> {
    return usersObservable;
  }

  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map((users: User[]) => {
        const user = users.find(user => (user.username === username) && (user.password === password));

        if (user) {
          this.isloggedIn = true;
          this.loggedInUser = user;
        } else {
          this.isloggedIn = false;
        }

        return this.isloggedIn;
      }));
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  getRedirectUrl(): string | undefined {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string | undefined): void {
    this.redirectUrl = url;
  }

  getLoginUrl(): string {
    return this.loginUrl;
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
