import { Injectable } from '@angular/core';

import { User } from '../domain/user';

@Injectable()
export class UserService {
  createUser(user: User) {
    //Log user data in console
    console.log("User Name: " + user.userName);
    console.log("Gender: " + user.gender);
    console.log("Married: " + user.isMarried);
    console.log("T & C accepted: " + user.isTCAccepted);
  }
}
