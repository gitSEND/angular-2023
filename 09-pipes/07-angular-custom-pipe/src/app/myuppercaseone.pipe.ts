import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Pipe({
  name: 'myuppercaseone'
})
export class MyUppercaseOnePipe extends UpperCasePipe {
  myTransform(value: string): string {
    let result = super.transform(value);
    result = result.split(' ').join('-');
    return result;
  }
}
