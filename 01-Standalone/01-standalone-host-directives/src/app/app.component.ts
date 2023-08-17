import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, MessageComponent],
})
export class AppComponent {
  myColor = 'red';

  constructor() {
    console.log('%c[Constructor] AppComponent', "color: brown; font-weight: bold;");
  }

  ngOnInit() {
    console.log('%c[NgOnInit] AppComponent', "color: brown; font-weight: bold;");
  }

  logColorChanged() {
    console.log('Color changed.');
  }
}
