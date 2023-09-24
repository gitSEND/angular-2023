import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './services/user-service';
import { User } from './domain/user';
import { Profile } from './domain/profile';

@Component({
  selector: 'app-template',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent implements OnInit {
  isValidFormSubmitted = false;
  user = new User();
  allProfiles!: Profile[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allProfiles = this.userService.getPofiles();
  }

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.user = form.value;
    this.userService.createUser(this.user);
    this.user = new User();
    form.resetForm();
  }
}
