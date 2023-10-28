import { Component } from '@angular/core';
@Component({
  selector: 'news-app',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  title = 'Latest News';
  city = 'Varanasi';
  primeMinister = {
    name: {
      fname: 'Narendra',
      lname: 'Modi'
    },
    gender: 'M'
  }
}
