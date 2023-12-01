import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from './logger.service';
import { Log } from './log';

@Component({
  selector: 'app-cp1',
  template: `
       <b>--- This is CP1Component ---</b>
   `
})
export class CP1Component implements OnInit, OnDestroy {
  constructor(private loggerService: LoggerService) { }
  ngOnInit() {

    this.loggerService.setCP1Log('c', 'Component created');
  }

  ngOnDestroy() {
    this.loggerService.setCP1Log('r', 'Component destroyed');
  }
}
