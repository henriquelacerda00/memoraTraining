import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 50 ? value.slice(0, 50) + '...' : value;
  }
}
