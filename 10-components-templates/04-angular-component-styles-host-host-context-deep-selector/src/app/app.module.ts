import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person.component';
import { CompanyComponent } from './company.component';
import { AddressComponent } from './address.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PersonComponent,
    CompanyComponent,
    AddressComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
