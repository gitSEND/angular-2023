import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { TitleStrategy } from '@angular/router';

import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person.module';

import { AddressComponent } from './address.component';
import { AppComponent } from './app.component';
import { CustomTitleStrategy } from './custom-titlestrategy';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    PersonModule,
    CountryModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent
  ],
  providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
