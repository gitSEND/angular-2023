import { Component, Input } from '@angular/core';

import { MyPost } from './mypost';

@Component({
  template: `
      <div class="post-highlights1">
		    <h3>Technology: {{post.name}}</h3>
     		<b>Description:</b>
        <p>{{post.description}}</p>
		  </div>
  `
})
export class TechnologyComponent implements MyPost {
  @Input() post: any;
}
