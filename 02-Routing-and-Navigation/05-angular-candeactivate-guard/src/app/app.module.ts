import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { DialogService } from './dialog.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CountryModule,
    PersonModule,
    AppRoutingModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
