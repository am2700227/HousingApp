import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(SellRent:number): Observable<Iproperty[]> {
    return this.http.get('assets/data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray:Array<Iproperty>=[]
        for(const id in data){
          if(data.hasOwnProperty(id)&& data[id].SellRent===SellRent){
            propertiesArray.push(data[id])
          }
        }
        // let propertiesArray: PropertyI[] = [];
        // let i: number = 0;
        // for (let val of data) {
        //   const obj: PropertyI = {
        //     id: val.id,
        //     Name: val.Name,
        //     price: val.Price,
        //     Type: val.Type,
        //     SellRent:val.SellRent,
        //     Image:val.Image
        //   };
        //   propertiesArray.push(obj);
        // }
        // for(let prop in data){
        //   console.log(prop);
        //   if(data.hasOwnProperty()) {
        //     // propertiesArray.push(prop);
        //   }
        // }
        console.log(propertiesArray);

        return propertiesArray;
      })
    );
  }
}
