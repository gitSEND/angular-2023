import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [
      { id: 1, title: 'Angular Tutorials', category: 'Angular', writer: 'Mahesh' }
    ];
    return { articles: articleDetails };
  }
}
