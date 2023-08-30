import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../services/user-service';
import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Component({
  selector: 'app-reactive',
  templateUrl: './user-reactive.component.html',
  styleUrls: ['./user.component.css']
})
export class UserReactiveComponent implements OnInit {
  isValidFormSubmitted = false;
  allProfiles!: Profile[];
  allTechnologies!: Technology[];
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      profile: [null, [Validators.required]],
      userName: ['', [Validators.required]],
      technologies: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.allProfiles = this.userService.getPofiles();
    this.allTechnologies = this.userService.getTechnologies();
  }

  get profile() {
    return this.userForm.get('profile');
  }

  get userName() {
    return this.userForm.get('userName');
  }

  get technologies() {
    return this.userForm.get('technologies');
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.valid) {
      this.isValidFormSubmitted = true;
    } else {
      return;
    }
    let newUser: User = this.userForm.value;
    this.userService.createUser(newUser);
    this.resetForm(this.userForm);
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  setDefaultValues() {
    let userProfile = this.allProfiles[2];
    let userTechnologies = [
      this.allTechnologies[1],
      this.allTechnologies[3]
    ];
    this.userForm.patchValue({ profile: userProfile, userName: "Narendra Modi", technologies: userTechnologies });
  }

  onProfileChange() {
    let profile: Profile = this.profile!.value;
    console.log('Profile Changed: ' + profile.prName);
  }

  compareTech(t1: Technology, t2: Technology): boolean {
    console.log(t1.techId + '-' + t2.techId);
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }
}
