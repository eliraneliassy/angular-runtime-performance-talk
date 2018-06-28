import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from '../utils/fibonacci';

import memo from 'memo-decorator';

@Pipe({
  name: 'pureFibo',
  pure: true
})
export class PureFiboPipe implements PipeTransform {
  @memo()
  transform(value: any, args?: any): any {
    console.log('asdasd');
    return fibonacci(value);
  }

}
