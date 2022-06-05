import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'StatusAsStringPipe' })
export class StatusAsStringPipe implements PipeTransform {
  transform(value: any, enumType: any): any {
    return value.name;
  }
}
