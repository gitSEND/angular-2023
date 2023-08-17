import { Injectable } from '@angular/core';
import { Book } from './book';

const BOOKS: Book[] = [
  { "id": 1, "name": "Java", "author": "Mahesh", "state": "off" },
  { "id": 2, "name": "Angular", "author": "Mahesh", "state": "off" },
  { "id": 3, "name": "Spring", "author": "Krishna", "state": "off" },
  { "id": 4, "name": "Hibernate", "author": "Krishna", "state": "off" }
];

let booksPromise = Promise.resolve(BOOKS);

@Injectable()
export class BookService {
  getBooks(): Promise<Book[]> {
    return booksPromise;
  }

  async addBook(book: Book): Promise<Book> {
    const books = await this.getBooks();
    const maxIndex = books.length - 1;
    const bookWithMaxIndex = books[maxIndex];

    book.id = bookWithMaxIndex.id + 1;
    book.state = 'off';
    books.push(book);

    return book;
  }

  async getBook(id: number): Promise<Book | undefined> {
    const books = await this.getBooks();

    return books.find(book => book.id === id);
  }

  async resetBookState(book: Book) {
    const books = await this.getBooks();
    books.map(book_1 => book_1.state = 'off');
    book.state = 'on';

    return books;
  }
}
