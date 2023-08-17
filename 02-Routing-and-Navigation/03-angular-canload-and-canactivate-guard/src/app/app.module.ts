import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './authentication/auth.module';
import { LogoutComponent } from './authentication/logout.component';
import { DashboardLayoutComponent } from './dashboard.layout.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    DashboardLayoutComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
