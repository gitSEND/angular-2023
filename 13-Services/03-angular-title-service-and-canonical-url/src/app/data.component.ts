import { Component, OnInit } from '@angular/core';
import { SEOService } from './seo.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {
  pageTitle = '';
  constructor(private seoService: SEOService) { }

  ngOnInit() {
    this.setPageTitle('This is page title');
    this.createLinkForCanonicalURL();
  }

  setPageTitle(title: string) {
    this.seoService.setPageTitle(title);
  }

  getPageTitle() {
    this.pageTitle = this.seoService.getPageTitle();
  }

  createLinkForCanonicalURL() {
    this.seoService.createLinkForCanonicalURL();
  }
}
