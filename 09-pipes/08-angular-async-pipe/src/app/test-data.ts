import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let books = [
      { id: 1, name: "Core Java" },
      { id: 2, name: "Angular 2" },
      { id: 3, name: "Hibernate" },
      { id: 4, name: "Spring" }
    ];
    return { books: books };
  }
}
