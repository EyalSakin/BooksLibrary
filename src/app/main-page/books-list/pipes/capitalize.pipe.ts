import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

    transform(value:string) {
      var string: string = value.replace(/[^a-zA-Z]/g, ' ');

      if(string){
        var result: string;

        result = validateString(string);

        return result.replace(/\b\w/g, first => first.toLocaleUpperCase());

      }

      function validateString(str: string): string{
        var result: string;

        result = str.replace(/^\s+|\s+$/gm,'');
        result = result.replace(/ +/g, " ");
        result = result.toLowerCase();

        return result;
      }
    }
}
