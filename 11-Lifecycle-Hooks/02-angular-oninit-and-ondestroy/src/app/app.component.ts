import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { Log } from './log';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  cp1log = {} as Log;
  showCP1 = true;
  showCounter = true;
  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.cp1log = this.loggerService.getCP1Log();
  }

  onToggleCP1() {
    this.showCP1 = (this.showCP1 === true) ? false : true;
  }

  onToggleCounter() {
    this.showCounter = (this.showCounter === true) ? false : true;
  }
}
