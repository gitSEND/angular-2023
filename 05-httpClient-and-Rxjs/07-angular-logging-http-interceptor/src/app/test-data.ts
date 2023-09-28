import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      { id: '101', name: 'Angular 2 by Krishna', category: 'Angular', year: '2015' },
      { id: '102', name: 'AngularJS by Krishna', category: 'Angular', year: '2015' }
    ];
    return { books: bookDetails };
  }
}
