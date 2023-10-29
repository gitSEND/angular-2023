import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cp1Component } from './cp1.component';
import { WriterComponent } from './writer.component';
import { MessageDirective } from './message.directive';
import { BookDirective } from './book.directive';
import { FavouriteBooksComponent } from './favourite-books.component';
import { FavouriteFriendsComponent } from './favourite-friends.component';
import { Cp2Component } from './cp2.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Cp1Component,
    WriterComponent,
    MessageDirective,
    BookDirective,
    FavouriteBooksComponent,
    FavouriteFriendsComponent,
    Cp2Component
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
