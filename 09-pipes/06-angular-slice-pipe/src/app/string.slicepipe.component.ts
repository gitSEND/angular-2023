import { Component } from '@angular/core';
@Component({
  selector: 'string-app',
  template: `
           <h3>String Example</h3>
		   {{myStr | slice:3:7}} <br/>
		   {{myStr | slice:3:-2}} <br/>
		   {{myStr | slice:6}} <br/>
		   {{myStr | slice:-6}} <br/>
         `
})
export class StringSlicePipeComponent {
  myStr: string = "abcdefghijk";
}
