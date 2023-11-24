import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MyPostDirective } from './mypost.directive';
import { MyPostComponent } from './mypost.component';
import { MyPostService } from './mypost.service';
import { PostItem } from './post-item';

@Component({
  selector: 'post-banner',
  template: `
    <h3>Post Highlights using ViewContainerRef from Directive</h3>
    <div cpMyPost></div>
	  <h3>Post Highlights using ViewContainerRef from Component</h3>
	  <app-mypost></app-mypost>
   `
})
export class MyPostBannerComponent implements AfterViewInit, OnDestroy {

  @ViewChild(MyPostDirective)
  private myPostDirective = {} as MyPostDirective;

  @ViewChild(MyPostComponent)
  private myPostComponent = {} as MyPostComponent;

  postItems: PostItem[] = [];
  intervalId: any;
  postIndex: number = -1;

  constructor(private myPostService: MyPostService) { }

  ngAfterViewInit() {
    this.postItems = this.myPostService.getAllPosts();
    this.startPostHighlights();
  }

  startPostHighlights() {
    this.intervalId = setInterval(() => {

      this.postIndex = (this.postIndex === this.postItems.length) ? 0 : this.postIndex + 1;

      //Use viewContainerRef from Directive
      this.myPostService.loadComponent(this.myPostDirective.viewContainerRef, this.postItems[this.postIndex]);

      //Use viewContainerRef from Component
      this.myPostService.loadComponent(this.myPostComponent.viewContainerRef, this.postItems[this.postIndex]);

    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
