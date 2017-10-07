import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobile'
})
export class MobilePipe implements PipeTransform {

  transform(value: string, args?: number): string {
    return value.length === 10 ? `+91 ${value} ${args}` : `? ${value} ${args}`;
  }
}
