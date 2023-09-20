import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

const USERS = ['mahesh', 'krishna'];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  unameAlreadyExists(uname: string): Observable<boolean> {
    if (USERS.indexOf(uname) >= 0)
      return of(true);
    else
      return of(false);
  }
  saveUser(user: User) {
    console.log(user.password);
    console.log(user.username);
    console.log(user.password);
  }
}
