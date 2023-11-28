import { PropertyI } from 'src/app/Services/property-i';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<PropertyI[]> {
    return this.http.get('assets/data/properties.json').pipe(
      map((data: any) => {
        let propertiesArray: PropertyI[] = [];
        let i: number = 0;
        for (let val of data) {
          const obj: PropertyI = {
            id: val.id,
            Name: val.Name,
            price: val.Price,
            Type: val.Type,
          };
          propertiesArray.push(obj);
        }
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
