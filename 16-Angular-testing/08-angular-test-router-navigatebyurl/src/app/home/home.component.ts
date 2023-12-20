import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books = {} as Book[];
  constructor(private bookService: BookService, private router: Router) { }

  getBooks() {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  goToDetail(id: number) {
    const url = '/view-detail/' + id;
    this.router.navigateByUrl(url);
  }
}
