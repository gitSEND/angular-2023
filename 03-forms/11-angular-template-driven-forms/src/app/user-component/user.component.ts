import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Profile } from '../domain/profile';
import { UserService } from '../services/user-service';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Component({
  selector: 'app-template',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isValidFormSubmitted = false;
  allProfiles: Profile[] = [];
  allTechnologies: Technology[] = [];
  initialProfileVal = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.allProfiles = this.userService.getPofiles();
    this.allTechnologies = this.userService.getTechnologies();
  }

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.valid) {
      this.isValidFormSubmitted = true;
    } else {
      return;
    }
    let newUser: User = form.value;
    this.userService.createUser(newUser);
    this.resetUserForm(form);
  }

  resetUserForm(form: NgForm) {
    form.resetForm();
    this.initialProfileVal = null;
  }

  setDefaultValues(form: NgForm) {
    let user = new User();
    user.userName = "Narendra Modi";
    user.age = 20;
    user.gender = 'male';
    user.isMarried = false;
    user.profile = this.allProfiles[2];
    user.technologies = [
      this.allTechnologies[1],
      this.allTechnologies[3]
    ];
    user.isTCAccepted = false;
    form.setValue(user);
  }

  compareTech(t1: Technology, t2: Technology): boolean {
    //console.log(t1.techId +'-' + t2.techId);
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }
}
