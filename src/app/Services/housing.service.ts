import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retryWhen } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproperty } from '../model/iproperty';
import { Property } from '../model/property';

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

        console.log(propertiesArray);

        return propertiesArray;
      })
    );

    return this.http.get<Iproperty[]>('data/properties.json')
  }



  addProperty(property:Property){
    let newProp:Property=property

    // Add new property to array if newProp already exist in local storage
    let curProp=localStorage.getItem('newProp')
    // if(curProp){
    //   newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))]
    // }
    if(curProp){
      localStorage.setItem('newProp',JSON.stringify(newProp))

    }

    localStorage.setItem('newProp',JSON.stringify(newProp))
  }



  newPropID() {
    let currentPID = localStorage.getItem('PID');

    if (currentPID) {
      localStorage.setItem('PID', String(+currentPID + 1));
      return +currentPID ;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }



}
