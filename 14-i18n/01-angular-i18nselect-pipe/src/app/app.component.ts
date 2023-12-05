import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //Example-1
  persons = [
    { name: 'Sita', gender: 'female' },
    { name: 'Ram', gender: 'male' }
  ];
  selectedPerson = this.persons[0];

  //Example-2
  daysMap = {
    '1': 'Monday', '2': 'Tuesday', '3': 'Wednesday', '4': 'Thursday', '5': 'Friday',
    '6': 'Saturday', '7': 'Sunday', 'other': 'Invalid Day'
  };
  selectedDayId = '3';

  //Example-3
  numberMap = {
    '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', 'other': 'Invalid'
  };
  selectedNumber = '3';
}

