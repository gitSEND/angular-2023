import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //Property for MsgComponent and AliasComponent
  msg = 'Hello World';

  //Property for AliasComponent
  city = 'Varanasi';

  //Property for TextSizeComponent
  textSize = 20;

  //Property for SelectBoxComponent
  colors = ['RED', 'GREEN', 'YELLOW'];

  //Property for CaseComponent
  emp = new Employee(1, 'Mohan Das');
}
