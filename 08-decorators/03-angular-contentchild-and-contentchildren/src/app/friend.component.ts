import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'friend',
  template: `
		Friend Name: {{friendName}}
  `
})
export class FriendComponent implements AfterContentInit {
  @ContentChild('name') nameRef = {} as ElementRef;

  get friendName(): String {
    return this.nameRef.nativeElement.innerHTML;
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: ', this.friendName);
  }
}
