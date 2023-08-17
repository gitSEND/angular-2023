import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book/add/addbook.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/detail/book-detail.component';
import { BookUpdateComponent } from './book/update/book-update.component';


const routes: Routes = [
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    outlet: 'bookPopup'
  },
  {
    path: 'update-book/:book-id',
    component: BookUpdateComponent,
    outlet: 'bookPopup'
  },
  {
    path: 'book-detail',
    component: BookDetailComponent,
    outlet: 'bookList'
  },
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
