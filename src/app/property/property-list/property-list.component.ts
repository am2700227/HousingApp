import { HousingService } from './../../Services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<Iproperty> = [];
  SellRent=1

  constructor( private route:ActivatedRoute,private HousingService: HousingService) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2 //we are not rent-property url else we are on the base url
    }
    this.HousingService.getAllProperties(this.SellRent).subscribe((data) => {
      this.properties = data;

      const newProperty = JSON.parse(localStorage.getItem('newProp') ?? 'null');


      if(newProperty.SellRent===this.SellRent){
        this.properties=[newProperty, ...this.properties]
      }
      // this.properties.push(newProperty[0])
      console.log(this.properties);
      console.log(this.route.snapshot.url.toString());
//
    }),
      (    error: any)=>{
      console.log(error)
    }
    //   this.http
    //     .get('assets/data/properties.json')
    //     .subscribe((data) => {
    //       this.properties=data
    //       console.log(data)});
  }
}
