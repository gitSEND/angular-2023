import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookService } from './book.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './book/add/addbook.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/detail/book-detail.component';
import { BookUpdateComponent } from './book/update/book-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookUpdateComponent,
    AddBookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
