import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { LoggerService } from './logger.service';
import { Log } from './log';

@Directive({
  selector: '[cp]'
})
export class CPDirective implements OnInit, OnDestroy {
  @Input('cp')
  personName = '';

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.createCP2Log(new Log('c', this.personName + ' is created.'));
  }

  ngOnDestroy() {
    this.loggerService.createCP2Log(new Log('r', this.personName + ' is removed.'));
  }
}
