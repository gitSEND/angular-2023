import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './company';
@Pipe({
  name: 'companytwo',
  pure: false
})
export class CompanyTwoPipe implements PipeTransform {
  transform(obj: Company): string {
    let output = obj.cname + ' : ' + obj.location;
    console.log('companytwo | ', { output });

    return output;
  }
}
