import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AddressRoutingModule }   from './address-routing.module';
import { AddressComponent }  from './address.component';

@NgModule({
  imports: [     
    CommonModule,
    AddressRoutingModule
  ], 
  declarations: [
    AddressComponent 
  ]
})
export class AddressModule { 
  constructor() {
    console.log('AddressModule loaded.');
  }
}
