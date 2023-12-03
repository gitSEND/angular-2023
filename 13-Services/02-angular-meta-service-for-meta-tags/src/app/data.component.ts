import { Component, OnInit } from '@angular/core';
import { SEOService } from './seo.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {
  constructor(private seoService: SEOService) { }

  ngOnInit() {
    this.addMetaTags();
  }

  addMetaTags() {
    this.seoService.addMetaTags();
  }

  updateMetaTags() {
    this.seoService.updateMetaTags();
  }

  removeMetaTags() {
    this.seoService.removeMetaTags();
  }

  getMetaTags() {
    this.seoService.getMetaTags();
  }
}
