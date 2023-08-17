import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list/person.list.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonService } from './services/person.service';

@NgModule({
  imports: [
    CommonModule,
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
