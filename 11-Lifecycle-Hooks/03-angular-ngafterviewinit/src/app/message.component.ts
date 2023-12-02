import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, QueryList } from '@angular/core';
import { MessageDirective } from './message.directive';

@Component({
  selector: 'app-message',
  template: `
    <h3>ViewChildren() and ViewChild()</h3>
	<div cpMsg></div>
	<div cpMsg></div>
	<div cpMsg></div>

	<ng-template #msgTemp>
          Namaste!
	</ng-template>
   `
})
export class MessageComponent implements AfterViewInit {
  @ViewChildren(MessageDirective)
  private msgList!: QueryList<MessageDirective>;

  @ViewChild('msgTemp')
  private msgTempRef!: TemplateRef<any>;

  ngAfterViewInit() {
    console.log("this.msgList.length: " + this.msgList.length);

    this.msgList.forEach(messageDirective =>
      messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
  }
}
