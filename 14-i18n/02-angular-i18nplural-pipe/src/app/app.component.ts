import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //Example-1
  persons = ['Ram'];
  personMapping:
    { [k: string]: string } = { '=0': 'No Person.', '=1': 'One person.', 'other': '# persons.' };

  //Example-2
  emps = [
    { name: 'Ram', num: 3 },
    { name: 'Shyam', num: 0 },
    { name: 'Mohan', num: 5 },
    { name: 'Sohan', num: 1 }
  ];
  msgMapping:
    { [k: string]: string } =
    {
      '=0': 'performing Good.',
      '=1': 'performing Better.',
      'other': 'performing Best.'
    };
}

