import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, categoria?: string): string {
    let newString: string = '';
    for (var i = value.length - 1; i >= 0; i--) {
      newString += value.charAt(i);
    }
    return newString + ' ' + categoria;
  }

}
