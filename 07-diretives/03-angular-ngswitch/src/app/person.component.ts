import { Component } from '@angular/core';
import { DirectionEnum } from './directionEnum';
@Component({
  selector: 'person-app',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  person = 'Sohan';
  ids = [1, 2, 3, 4];
  dirEnum = DirectionEnum;
  myDir = DirectionEnum.North;
}
