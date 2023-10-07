import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      { id: 101, name: 'Angular by Krishna' },
      { id: 102, name: 'Core Java by Vishnu' },
    ];
    return { books: bookDetails };
  }
} 