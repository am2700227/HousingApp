import { PropertyI } from 'src/app/Services/property-i';
import { HousingService } from './../../Services/housing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<PropertyI> = [];

  constructor(private HousingService: HousingService) {}

  ngOnInit(): void {
    this.HousingService.getAllProperties().subscribe((data) => {
      this.properties = data;
      console.log(data);
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
