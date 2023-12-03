import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CowComponent } from './cow.component';
import { LionComponent } from './lion.component';
import { AnyAnimalComponent } from './any-animal.component';
import { AnimalDetailsComponent } from './animal-details.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CowComponent,
    LionComponent,
    AnyAnimalComponent,
    AnimalDetailsComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
