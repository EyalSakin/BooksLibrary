import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

    // transform(value:any) {
    //     if (value) {
    //         return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
    //     }else{
    //         return value.charAt(0).toUpperCase() + value.slice(1);
    //     }
    // }

    transform(value:string) {
      var validString: string = value.replace(/[^a-zA-Z]/g, ' ');

      if (validString) {
        return validString.replace(/\b\w/g, first => first.toLocaleUpperCase());
      }else{
        return validString.charAt(0).toUpperCase() + value.slice(1);
      }
    }
}
