import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'strformat'
})
export class StrFormatPipe implements PipeTransform {
  transform(value: string, seperator: string): string {
    let result = value.split(' ').join(seperator);
    return result;
  }
}
