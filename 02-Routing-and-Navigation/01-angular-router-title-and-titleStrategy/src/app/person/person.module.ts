import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';

import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person.component';
import { PersonService } from './service/person.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  providers: [PersonService]

})
export class PersonModule { }
