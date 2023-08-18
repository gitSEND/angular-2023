import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  addBook(book: Book): void {
    this.getBooks().then(books => {
      let maxIndex = books.length - 1;
      let bookWithMaxIndex = books[maxIndex];
      book.id = bookWithMaxIndex.id + 1;
      books.push(book);
    });
  }

  async getBook(id: number): Promise<Book | undefined> {
    const books = await this.getBooks();

    return books.find(book => book.id === id);
  }

  deleteBook(id: number): void {
    this.getBooks().then(books => {
      const book = books.find(ob => ob.id === id);
      if (book) {
        const bookIndex = books.indexOf(book);
        books.splice(bookIndex, 1);
      } else {
        console.log('El libro con id: ' + id + ' buscado no existe');
      }
    });
  }
}
