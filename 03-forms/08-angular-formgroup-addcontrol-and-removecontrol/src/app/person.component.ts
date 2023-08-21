import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html'
})
export class PersonComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private personService: PersonService) { }

  personForm: FormGroup = this.formBuilder.group({
    pname: ['', Validators.required],
    isIndian: ['', Validators.required],
    isEmp: ['', Validators.required],
    favBookEntry: ''
  });

  companyFG: FormGroup = this.formBuilder.group({
    compName: ['', Validators.required],
    compLocation: ['', Validators.required],
    profile: ['', Validators.required]
  });

  ngOnInit() {
    this.handleNationality();
    this.handleEmploymentStatus();
    this.handleFavoriteBooks();
  }
  get pname() {
    return this.personForm.get('pname') as FormControl;
  }

  get isIndian() {
    return this.personForm.get('isIndian') as FormControl;
  }

  get isEmp() {
    return this.personForm.get('isEmp') as FormControl;
  }

  get favBookEntry() {
    return this.personForm.get('favBookEntry') as FormControl;
  }

  get favBooks() {
    return this.personForm.get('favBooks') as FormArray;
  }

  /**
   * Agregar un FormControl: FC
   */
  handleNationality() {
    this.isIndian.valueChanges.subscribe(res => {
      console.log('this.isIndian : ', res);

      if (res === 'false') {
        this.personForm.addControl(
          'nationality',
          this.formBuilder.control('', [Validators.required])
        );
      } else {
        this.personForm.removeControl('nationality');
      }
    });
  }

  /**
   * Agregar un FormGroup: FG
   */
  handleEmploymentStatus() {
    this.isEmp.valueChanges.subscribe(val => {
      console.log('this.isEmp : ', val);

      if (val === 'true' && !this.personForm.contains('company')) {
        this.personForm.addControl('company', this.companyFG);
      } else {
        this.personForm.removeControl('company');
      }
    });
  }

  /**
   * Agregar un FormArray: FA
   */
  handleFavoriteBooks() {
    this.favBookEntry.valueChanges.subscribe(fbEntry => {
      console.log('this.favBookEntry : ', fbEntry);

      if (fbEntry && !this.personForm.contains('favBooks')) {
        this.personForm.addControl(
          'favBooks',
          this.formBuilder.array([new FormControl('', [Validators.required])])
        );
      } else {
        this.personForm.removeControl('favBooks');
      }
    });
  }

  deleteBook(index: number) {
    this.favBooks.removeAt(index);
  }

  addMoreBooks() {
    this.favBooks.push(new FormControl('', [Validators.required]));
  }

  onFormSubmit() {
    if (this.personForm.valid) {
      this.personService.savePerson(this.personForm.value);
    }
  }
}
