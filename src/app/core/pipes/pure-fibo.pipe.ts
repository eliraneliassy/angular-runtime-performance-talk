import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from '../utils/fibonacci';

@Pipe({
  name: 'pureFibo',
  pure: true
})
export class PureFiboPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('asdasd');
    return fibonacci(value);
  }

}
