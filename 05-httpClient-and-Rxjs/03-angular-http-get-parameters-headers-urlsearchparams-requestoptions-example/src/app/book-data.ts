import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BookData implements InMemoryDbService {
  createDb() {
    let books = [
      { id: '1', name: 'Angular 2 by Krishna', category: 'Angular', writer: 'Krishna' },
      { id: '2', name: 'AngularJS by Krishna', category: 'Angular', writer: 'Krishna' },
      { id: '3', name: 'Angular 2 by Vishnu', category: 'Angular', writer: 'Vishnu' },
      { id: '4', name: 'Core Java by Vishnu', category: 'Java', writer: 'Vishnu' },
      { id: '5', name: 'JSP & Servlet by Vishnu', category: 'Java', writer: 'Vishnu' },
      { id: '6', name: 'JPA by Vishnu', category: 'Java', writer: 'Vishnu' },
      { id: '7', name: 'Hibernate by Krishna', category: 'Hibernate', writer: 'Krishna' }
    ];
    return { books };
  }
}
