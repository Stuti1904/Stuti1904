import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name:'appFilter'})

export class FilterPipe implements PipeTransform {
transform(itmes :any[], searchText:string): any[]{
    if(!itmes){
        return[];
    }
    if(!searchText){
        return itmes;
    }
    searchText = searchText.toLocaleLowerCase();
    return  itmes.filter(it=>{
        return it.toLocaleLowerCase().includes(searchText);
    });
}
}