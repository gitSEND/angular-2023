import { Component } from '@angular/core';

@Component({
   selector: 'app-cp2',
   templateUrl: './cp2.component.html'
})
export class Cp2Component {
   showAllBook = false;
   onShowAllBooks() {
	   this.showAllBook = (this.showAllBook === true)? false : true;
   }     
}