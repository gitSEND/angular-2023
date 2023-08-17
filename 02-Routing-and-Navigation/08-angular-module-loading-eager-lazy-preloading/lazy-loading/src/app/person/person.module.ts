import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person.list.component';
import { PersonService } from './services/person.service';
import { PersonRoutingModule } from './person-routing.module';

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
