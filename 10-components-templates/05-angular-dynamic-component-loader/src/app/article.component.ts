import { Component, Input } from '@angular/core';

import { MyPost } from './mypost';

@Component({
  template: `
        <div class="post-highlights2">
          <p><b>Article-{{post.sn}}: {{post.title}}</b></p>
          <p>Category: {{post.category}}</p>
		    </div>
  `
})
export class ArticleComponent implements MyPost {
  @Input() post: any;
}
