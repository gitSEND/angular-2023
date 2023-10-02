import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      { id: '101', name: 'Angular by Krishna', category: 'Angular', year: '2015' },
      { id: '102', name: 'Spring by Rama', category: 'Spring', year: '2016' }
    ];
    return { booksSearch: bookDetails };
  }
}
