import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddressComponent } from './address.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CountryModule,
    PersonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded.');
  }
}
