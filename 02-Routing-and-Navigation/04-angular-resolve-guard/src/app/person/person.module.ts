import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { PersonComponent }  from './person.component';
import { PersonListComponent }  from './person-list/person.list.component';
import { PersonDetailComponent }  from './person-list/detail/person.detail.component';
import { PersonService } from './services/person.service';
import { PersonRoutingModule }  from './person-routing.module';

@NgModule({
  imports: [     
    CommonModule,
		PersonRoutingModule
  ], 
  declarations: [
		PersonComponent,
		PersonListComponent,
		PersonDetailComponent
  ],
  providers: [ PersonService ]
})
export class PersonModule { }
