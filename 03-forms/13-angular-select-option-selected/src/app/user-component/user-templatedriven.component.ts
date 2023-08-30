import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../services/user-service';
import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Component({
  selector: 'app-template',
  templateUrl: './user-templatedriven.component.html',
  styleUrls: ['./user.component.css']
})
export class UserTemplateDrivenComponent implements OnInit {
  isValidFormSubmitted = false;
  allProfiles!: Profile[];
  allTechnologies!: Technology[];
  user = new User();

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
    let userName = form.controls['name'].value;
    let userProfile: Profile = form.controls['profile'].value;
    let userTechnologies: Technology[] = form.controls['selectedTechs'].value;

    let newUser = new User();
    newUser.userName = userName;
    newUser.profile = userProfile;
    newUser.technologies = userTechnologies;

    this.userService.createUser(newUser);

    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.user.profile = null;
    this.user.userName = '';
  }

  setDefaultValues() {
    this.user.userName = "Narendra Modi";
    this.user.profile = this.allProfiles[2];
    this.user.technologies = [
      this.allTechnologies[1],
      this.allTechnologies[3]
    ];
  }

  onProfileChange() {
    console.log('Profile Changed: ' + this.user!.profile!.prName);
  }

  compareTech(t1: Technology, t2: Technology): boolean {
    console.log(t1.techId + '-' + t2.techId);
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }
}
