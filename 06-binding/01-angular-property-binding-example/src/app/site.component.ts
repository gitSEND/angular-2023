import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {
  flag = true;
  website = {
    name: 'ConcretePage',
    url: 'http://www.concretepage.com',
    logo: '/assets/images/logo.jpg',
    description: 'Learn angular 2 property binding.'
  }
}
