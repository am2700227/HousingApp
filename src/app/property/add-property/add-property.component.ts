import { Component, OnInit,ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import {NgForm} from '@angular/forms'
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { Iproperty } from 'src/app/model/iproperty';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') AddPropertyForm:NgForm
  @ViewChild('formTabs') formTabs?: TabsetComponent;




  //will come from mastersdB
propertyTypes: Array<string>=['House','apartment','Duplex']
furnishTypes:Array<string>=['Fully','Semi','unfurnished']

propertyView:IPropertyBase={
  Id: 0,
  SellRent: 0,
  Name: '',
  Image: '',
  PType: '',
  FType: '',
  Price: 0,
  BHK: 0,
  BuiltArea: 0,
  City: '',
  RTM: 0
}

constructor(private router:Router){}

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/'])
  }

  onSubmit(Form: NgForm){
    console.log("form data submitted");
    console.log(Form.value);
    console.log('SellRent' +this.AddPropertyForm.value.BasicInfo.SellRent);


  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }

}}
