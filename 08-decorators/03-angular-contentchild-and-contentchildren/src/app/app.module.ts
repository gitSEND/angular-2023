import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDirective } from './book.directive';
import { WriterComponent } from './writer.component';
import { FavouriteBooksComponent } from './favourite-books.component';
import { CityComponent } from './city.component';
import { AddressComponent } from './address.component';
import { FavouriteCitiesComponent } from './favourite-cities.component';
import { FriendComponent } from './friend.component';
import { FavouriteFriendsComponent } from './favourite-friends.component';
import { PersonComponent } from './person.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BookDirective,
    WriterComponent,
    FavouriteBooksComponent,
    CityComponent,
    AddressComponent,
    FavouriteCitiesComponent,
    FriendComponent,
    FavouriteFriendsComponent,
    PersonComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
