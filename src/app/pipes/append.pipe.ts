import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: any, args?: any): any {
        if(args !== null && args != ''){
            value = value.map((name)=>{

                if(name.indexOf(args) > -1){
                    return name;
                }
            });
        }

 //  value = value +' = '+args;
    return value;
  }

}
