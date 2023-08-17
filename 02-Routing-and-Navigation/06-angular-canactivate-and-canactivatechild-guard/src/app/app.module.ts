import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddressComponent } from './address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthService } from './authentication/services/auth.service';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    DashboardLayoutComponent,
    AddressComponent,
    LogoutComponent,
    AppComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
