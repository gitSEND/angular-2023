import { Injectable } from '@angular/core';
import { Book } from './book';

const BOOKS: Book[] = [
  { "id": 101, "name": "Core Java", "price": "25.50", "description": "Core Java Tutorials" },
  { "id": 102, "name": "Angular", "price": "15.20", "description": "Learn Angular" },
  { "id": 103, "name": "Hibernate", "price": "13.50", "description": "Hibernate Examples" },
  { "id": 104, "name": "TypeScript", "price": "26.40", "description": "TypeScript Tutorials" }
];

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }
  getBook(id: number): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.id === id) as Book);
  }
}
