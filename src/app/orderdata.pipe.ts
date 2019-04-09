import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderdata'
})
export class OrderdataPipe implements PipeTransform {

   public newArray;




  transform(array: Array<Object>, args: string): Array<object> {
    console.log("In orderDataPipe")
    if (!array || !args) {
      return array;
    }
    
    //console.log(args)
    // filter items array, items which match and return true will be kept, false will be filtered out
    if(args == undefined ){
      return array;
    }
    else if(args == "All"){
      return array;
    }
    else{
      this.newArray = array.filter(val => {
        let urlInArray = val['url'].toLowerCase();
        let argsPassed = args.toLowerCase();
        return urlInArray.search(argsPassed) > -1;
      });  
    }

   
    
    return this.newArray;

  }

}
