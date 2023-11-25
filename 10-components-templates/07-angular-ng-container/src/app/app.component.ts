import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>ng-container with ngIf</h3>

    <p>
      My name is Narendra.
      <ng-container *ngIf="isMsgShow">
        My message: {{msg}}
      </ng-container>
      We should take care of each other.
    </p>

    <h3>ng-container with ngFor</h3>

    <ul>
      <ng-container *ngFor="let user of users">
        <li *ngIf="user.isActive">
            {{user.name}}
        </li>
      </ng-container>
    </ul>

    <h3>ng-container with ngSwitch</h3>

    <div [ngSwitch]="userId">
      <ng-container *ngSwitchCase="101"> Mahesh </ng-container>
      <ng-container *ngSwitchCase="102"> Krishna </ng-container>
    </div>

    <hr>
    <ng-container [ngSwitch]="userId">
      <ng-container *ngSwitchCase="101"> Mahesh </ng-container>
      <ng-container *ngSwitchCase="102"> Krishna </ng-container>
    </ng-container>

    <h3>ng-container with ng-template</h3>

    <ng-template #hello>
        <span>Hello World!</span>
    </ng-template>

    <ng-template #book let-thename="name" let-thewriter="writer">
      <span> The book {{thename}} is soul of India. It is written by
      Maharshi {{thewriter}} ji. </span>
    </ng-template>

    <ng-container *ngTemplateOutlet="hello"></ng-container>
    <br/><br/>
    <ng-container *ngTemplateOutlet="book; context: bookContext"></ng-container>


`
})
export class AppComponent {
  msg = 'World should unite.';
  isMsgShow = true;
  isUserActive = true;

  userId = 101;
  users = [
    { id: 101, name: 'Mahesh', isActive: true },
    { id: 102, name: 'Krishna', isActive: true },
  ];

  bookContext = { name: 'Ramayan', writer: 'Valmiki' };
}
