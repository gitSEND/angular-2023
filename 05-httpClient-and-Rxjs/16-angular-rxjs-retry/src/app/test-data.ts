import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      { id: 101, name: 'Angular by Krishna', category: 'Angular' },
      { id: 102, name: 'Core Java by Vishnu', category: 'Java' },
      { id: 103, name: 'NgRx by Rama', category: 'Angular' }
    ];
    return { books: bookDetails };
  }
} 