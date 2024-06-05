import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimTitle',
  standalone: true,
})
export class TrimTitlePipe implements PipeTransform {
  transform(value: string, maxLength: number = 21): string {
    if (!value) {
      return '';
    }
    if (value.length > maxLength) {
      return value.substring(0, maxLength);
    }
    return value;
  }
}
