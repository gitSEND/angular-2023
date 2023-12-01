import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { LoggerService } from './logger.service';
import { Log } from './log';

@Component({
  selector: 'app-cp2',
  templateUrl: './cp2.component.html'
})
export class CP2Component implements OnInit {
  persons: Person[] = [];
  name = '';
  allLogs: Log[] = [];

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.allLogs = this.loggerService.getAllCP2Logs();
  }

  add() {
    let personId = 0;
    let maxIndex = this.persons.length - 1;

    if (maxIndex === -1) {
      personId = 1;
    } else {
      let personWithMaxIndex = this.persons[maxIndex];
      personId = personWithMaxIndex.id + 1;
    }

    this.persons.push(new Person(personId, this.name));
    this.name = '';
  }

  remove(personId: number) {
    let item = this.persons.find(ob => (ob.id === personId)) ?? {} as Person;
    let itemIndex = this.persons.indexOf(item);

    this.persons.splice(itemIndex, 1);
  }
}
