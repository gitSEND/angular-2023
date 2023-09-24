import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BookData implements InMemoryDbService {
  createDb() {
    let books = [
      { id: 1, name: 'Core Java' },
      { id: 2, name: 'Angular' },
      { id: 3, name: 'Hibernate' }
    ];
    return { books };
  }
}
