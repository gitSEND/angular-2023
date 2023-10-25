import { Component, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vc-demo3',
  template: `
   <h3>@ViewChildren + ElementRef</h3>
   <div>
	 <div #pname>Mohit</div>
	 <div #pname>Anup</div>
	 <div #pname>Nilesh</div>
   </div>
   `
})
export class VCThreeDemoComponent implements AfterViewInit {
  @ViewChildren('pname')
  persons!: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log('--- @ViewChildren + ElementRef ---');
    this.persons.forEach(el => console.log(el.nativeElement.innerHTML));
  }
}
