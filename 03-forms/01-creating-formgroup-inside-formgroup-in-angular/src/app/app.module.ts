import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamManagementComponent } from './team-management.component';
import { TeamManagementService } from './team-management.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TeamManagementComponent
  ],
  providers: [
    TeamManagementService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
