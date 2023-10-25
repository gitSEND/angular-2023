import { Component, ViewChildren, AfterViewInit, ViewContainerRef, QueryList, ElementRef } from '@angular/core';
import { WriterComponent } from './writer.component';

@Component({
  selector: 'app-vc-demo1',
  template: `
  <h3>@ViewChildren + Component</h3>
	<div>
	  <writer name="Krishna" book="Angular Tutorials"></writer> <br/>
	  <writer name="Mahesh" book="Java Tutorials"></writer> <br/>
	  <writer name="Krishna" book="jQuery Tutorials"></writer> <br/>
	  <writer name="Bramha" book="Hibernate Tutorials" *ngIf="allWritersVisible"></writer> <br/>
	  <writer name="Vishnu" book="Spring Tutorials" *ngIf="allWritersVisible"></writer>
	</div>
	<button (click)="onShowAllWriters()" >
	  <label *ngIf="!allWritersVisible">Show More</label>
	  <label *ngIf="allWritersVisible">Show Less</label>
	</button>
  `
})
export class VCOneDemoComponent implements AfterViewInit {
  @ViewChildren(WriterComponent)
  writers1!: QueryList<WriterComponent>;

  @ViewChildren(WriterComponent, { read: ElementRef })
  writers2!: QueryList<ElementRef>;

  @ViewChildren(WriterComponent, { read: ViewContainerRef })
  writers3!: QueryList<ViewContainerRef>;

  allWritersVisible = false;

  ngAfterViewInit() {
    console.log('--- @ViewChildren + Component ---');
    this.writers1.changes.subscribe(list => {
      console.log('list: ', list);
      list.forEach((writer: any) => console.log(writer.writerName + ' - ' + writer.bookName));
    });
    console.log(this.writers1.length);

    console.log("Result with ElementRef:");
    this.writers2.forEach(el => console.log(el));

    console.log("Result with ViewContainerRef:");
    this.writers3.forEach(vref => console.log(vref));
  }
  onShowAllWriters() {
    this.allWritersVisible = (this.allWritersVisible === true) ? false : true;
  }
}
