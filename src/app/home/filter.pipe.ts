import {Pipe, PipeTransform} from '@angular/core';
import {DataModel} from './data.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: DataModel[], searchText: string, fieldName: string): DataModel[] {

    if (!items) { return []; }

    if (!searchText )  { return items; }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (fieldName === 'orderBy') {
      }
      else if (item && item[fieldName]){
          return item[fieldName].toString().toLowerCase().includes(searchText);
        }
    });

  }

}
