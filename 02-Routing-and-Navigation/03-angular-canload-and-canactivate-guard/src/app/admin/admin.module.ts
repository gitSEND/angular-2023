import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PersonListComponent } from './person-list/person.list.component';
import { PersonService } from './services/person.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    PersonListComponent
  ],
  providers: [PersonService]
})
export class AdminModule {
  constructor() {
    console.log("🚀 ~ file: admin.module.ts:21 ~ AdminModule ~ constructor ~ AdminModule:")
  }
}
