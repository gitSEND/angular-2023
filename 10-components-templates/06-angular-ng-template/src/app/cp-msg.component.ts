import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList } from '@angular/core';
import { MessageDirective } from './message.directive';

@Component({
  selector: 'app-msg',
  templateUrl: './cp-msg.component.html'
})
export class CpMsgComponent implements AfterViewInit {
  @ViewChild('msg')
  private msgTempRef = {} as TemplateRef<any>;

  @ViewChildren(MessageDirective)
  private queryList = {} as QueryList<MessageDirective>;

  ngAfterViewInit() {
    this.queryList.map(messageDirective =>
      messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
  }
}
