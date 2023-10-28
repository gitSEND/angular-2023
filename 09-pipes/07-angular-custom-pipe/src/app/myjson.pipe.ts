import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'myjson'
})
export class MyJSONPipe implements PipeTransform {
  transform(value: any, prettyprint?: number, fields?: string): string {
    let array = (fields == null ? null : fields.split(','));
    let pp = (prettyprint == null ? 0 : prettyprint);
    console.log({ value }, { array }, { pp });

    let result = JSON.stringify(value, array, pp);
    return result;
  }
}
