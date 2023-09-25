import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  allBooks: Book[] | null = [];
  book: Book | null = {};
  filteredListOfBooks: Book[] | null = [];
  errorMessage!: string;
  dataAvailableById = true;
  dataAvailableAfterFilter = true;
  categories = [
    { name: 'Angular' },
    { name: 'Hibernate' },
    { name: 'Java' }
  ];
  writers = [
    { name: 'Krishna' },
    { name: 'Vishnu' }
  ];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(
        {
          next: data => this.allBooks = data,
          error: error => this.errorMessage = error
        });
  }

  getBookById(bookId: string) {
    this.dataAvailableById = true;
    this.book = null;
    this.bookService.getBookById(bookId)
      .subscribe({
        next: data => {
          console.log('response: ', data);

          if (data.length > 0) {
            this.book = data[0];
          } else {
            this.dataAvailableById = false;
          }
        },
        error: error => this.errorMessage = <any>error
      });
  }

  getBooksAfterFilter(category: string, writer: string) {
    this.dataAvailableAfterFilter = true;
    this.filteredListOfBooks = null;
    this.bookService.getBooksAfterFilter(category, writer)
      .subscribe({
        next: data => {
          if (data.length > 0) {
            this.filteredListOfBooks = data;
          } else {
            this.dataAvailableAfterFilter = false;
          }
        },
        error: error => this.errorMessage = <any>error
      });
  }

  bookById(bookByIdForm: NgForm) {
    let bookId = bookByIdForm.controls['bookId'].value;
    this.getBookById(bookId);
  }

  filterBooks(bookByIdForm: NgForm) {
    let catg = bookByIdForm.controls['category'].value;
    let wtr = bookByIdForm.controls['writer'].value;
    this.getBooksAfterFilter(catg, wtr);
  }
}
