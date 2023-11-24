import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ 
   selector: '[cpMyPost]' 
})
export class MyPostDirective {
   constructor(public viewContainerRef: ViewContainerRef) { }
}