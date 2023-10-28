import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './company';
@Pipe({
  name: 'companyone'
})
export class CompanyOnePipe implements PipeTransform {
  transform(obj: Company): string {
    let output = obj.cname + ' : ' + obj.location;
    console.log('companyone | ', { output });

    return output;
  }
}
