import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-2',
  templateUrl: 'person.component-2.html'
})
export class PersonComponent2 implements OnInit {
  personName = new FormControl('', Validators.required);
  personAge = new FormControl();

  ngOnInit(): void {
    this.personName.valueChanges.subscribe(console.log);
    console.log(this.personName.valid);
  }

}
