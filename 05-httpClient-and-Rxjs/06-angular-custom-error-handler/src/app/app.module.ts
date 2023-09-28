import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddCountryComponent } from './country/add-country.component';
import { AddPersonComponent } from './person/add-person.component';
import { GlobalErrorComponent } from './global-error.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalErrorHandlerService } from './global-error-handler.service';
// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AddCountryComponent,
    AddPersonComponent,
    GlobalErrorComponent,
    PageNotFoundComponent
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    // Location,
    // { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
