import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'division'
})
export class DivisionPipe implements PipeTransform {
  transform(dividend: number, divisor: number): number {
    let num = dividend / divisor;
    return num;
  }
}
