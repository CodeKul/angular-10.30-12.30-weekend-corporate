import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filer'
  /*pure: false*/
})
export class FilerPipe implements PipeTransform {

  transform(mobiles: string[], firstChar?: string): string[] {
    if (firstChar) {
      let filtered: string[] = [];

      mobiles.forEach(mob => {
        if (firstChar === mob.charAt(0)) {
          filtered.push(mob);
        }
      });
      return filtered;
    }
    return mobiles;
  }
}
