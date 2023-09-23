import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user-service';
import { User } from './user';

@Component({
  selector: 'app-template',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent implements OnInit {
  isValidFormSubmitted = false;
  minNum = 15;
  maxNum = 50;
  user = new User();

  constructor(private userService: UserService) { }

  ngOnInit() { }

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
