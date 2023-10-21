import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgForOfDemoComponent } from './ngforof-demo.component';
import { NgTemplateNgForOfComponent } from './ng-template-ngforof.component';
import { PersonService } from './person.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NgForOfDemoComponent,
    NgTemplateNgForOfComponent
  ],
  providers: [
    PersonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
