import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Student[], filterText: string): Student[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText
      ? value.filter((c: Student) => c.AdiSoyadi.toLocaleLowerCase().indexOf(filterText) !== -1)
      : value;
  }

}
