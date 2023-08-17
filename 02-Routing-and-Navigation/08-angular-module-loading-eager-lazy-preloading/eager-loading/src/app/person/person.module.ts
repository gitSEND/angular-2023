import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';

import { PersonListComponent } from './person-list/person.list.component';
import { PersonComponent } from './person.component';

import { PersonService } from './services/person.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonComponent,
    PersonListComponent
  ],
  providers: [PersonService]
})
export class PersonModule {
  constructor() {
    console.log('PersonModule loaded.');
  }
}
