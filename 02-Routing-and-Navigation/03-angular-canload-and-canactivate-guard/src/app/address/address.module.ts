import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';

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
    console.log("🚀 ~ file: address.module.ts:17 ~ AddressModule ~ constructor ~ AddressModule:");

  }
}
