import { Component, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'favourite-friends',
  template: `
	   {{allFriends}}
  `
})
export class FavouriteFriendsComponent implements AfterContentInit {
  //QueryList + @ContentChildren + ElementRef
  @ContentChildren('ffname')
  allFriendsRef = {} as QueryList<ElementRef>;

  get allFriends(): string {
    return this.allFriendsRef ? this.allFriendsRef.map(f => f.nativeElement.innerHTML).join(', ') : '';
  }
  ngAfterContentInit() {
    console.log(this.allFriends);
  }
}
