import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList, ElementRef } from '@angular/core';
import { MessageDirective } from './message.directive';
import { WriterComponent } from './writer.component';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html'
})
export class Cp1Component implements AfterViewInit {
  //QueryList + @ViewChildren + Directive
  @ViewChildren(MessageDirective)
  private msgList = {} as QueryList<MessageDirective>;
  @ViewChild('msgTemp')
  private msgTempRef = {} as TemplateRef<any>;

  //QueryList + @ViewChildren + Component
  @ViewChildren('bkWriter')
  allWriters = {} as QueryList<WriterComponent>;

  showAllWriter = false;

  //QueryList + @ViewChildren + ElementRef
  @ViewChildren('pname')
  allPersons = {} as QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log('--- using QueryList.changes ---');
    this.allWriters.changes.subscribe(list => {
      list.forEach((writer: WriterComponent) => console.log(writer.writerName + ' - ' + writer.bookName));
    });


    console.log('--- using QueryList.forEach ---');
    this.msgList.forEach(messageDirective =>
      messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));

    this.allWriters.forEach(writer => console.log(writer.writerName + ' - ' + writer.bookName));

    console.log('--- using QueryList.length ---');
    console.log(this.allWriters.length);

    console.log('--- using QueryList.find ---');
    let javaWriter = this.allWriters.find(writer => writer.bookName === 'Java Tutorials');
    console.log(javaWriter?.writerName);

    console.log('--- using QueryList.map ---');
    let wnames = this.allWriters.map(writer => writer.writerName);
    for (let name of wnames) {
      console.log(name);
    }

    console.log('--- using QueryList.filter ---');
    let writers = this.allWriters.filter(writer => writer.writerName === 'Krishna');
    for (let w of writers) {
      console.log(w.bookName);
    }

    console.log('--- using QueryList.first ---');
    let firstEl = this.allPersons.first;
    console.log(firstEl.nativeElement.innerHTML);

    console.log('--- using QueryList.last ---');
    let lastEl = this.allPersons.last;
    console.log(lastEl.nativeElement.innerHTML);
  }
  onShowAllWriters() {
    this.showAllWriter = (this.showAllWriter === true) ? false : true;
  }
}
