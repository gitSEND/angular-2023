import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isReq = true;

  isOptional(data: string) {
    if (data == 'yes') {
      return true;
    } else {
      return false;
    }
  }
}
