import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Services/housing.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    PropertyDetailComponent,
    AddPropertyComponent,
    UserLoginComponent,
    UserRegisterComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule,],
  providers: [HousingService,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
