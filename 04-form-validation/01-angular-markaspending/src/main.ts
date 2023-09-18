import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from "@angular/core";
import { CompanyComponent } from './app/company.component';
import { CompanyService } from './app/company.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CompanyComponent
  ],
  template: `
    <app-comp></app-comp>
  `,
})
export class AppComponent {

}
bootstrapApplication(AppComponent, {
  providers: [
    CompanyService
  ]
});
