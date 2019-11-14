import { Pipe, PipeTransform } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    
    const resultFilter = [] 
    for(const filter in value){
      if(value[filter].name.toLowerCase().indexOf(args.toString().toLowerCase()) > -1){
        resultFilter.push(value[filter]);        
      }    
    }

    return resultFilter;
  }

}
