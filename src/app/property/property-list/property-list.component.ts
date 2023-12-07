import { PropertyI } from 'src/app/Services/property-i';
import { HousingService } from './../../Services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<PropertyI> = [];
  SellRent=1

  constructor( private route:ActivatedRoute,private HousingService: HousingService) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2 //we are not rent-property url else we are on the base url
    }
    this.HousingService.getAllProperties(this.SellRent).subscribe((data) => {
      this.properties = data;
      console.log(data);
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
