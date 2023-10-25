import { Component, ViewChild, ViewChildren, AfterViewInit, ViewContainerRef, TemplateRef, QueryList } from '@angular/core';
import { MessageDirective } from './message.directive';

@Component({
  selector: 'app-vc-demo2',
  template: `
	<h3>@ViewChildren + Directive</h3>
	<div cpMsg></div>
	<div cpMsg></div>
	<div cpMsg></div>

	<ng-template #msgTemp>
      Hello World!
	</ng-template>
   `
})
export class VCTwoDemoComponent implements AfterViewInit {
  @ViewChildren(MessageDirective)
  private msgList!: QueryList<MessageDirective>;

  @ViewChild('msgTemp')
  private msgTempRef!: TemplateRef<any>;

  ngAfterViewInit() {
    console.log('--- @ViewChildren + Directive ---');
    console.log("this.msgList.length: " + this.msgList.length);
    this.msgList.forEach(messageDirective => messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
  }
}
