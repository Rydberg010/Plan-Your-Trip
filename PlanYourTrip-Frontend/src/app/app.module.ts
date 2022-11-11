import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { PackagesComponent } from './user/packages/packages.component';
import { BookingsComponent } from './user/bookings/bookings.component';
import { BookNowComponent } from './user/book-now/book-now.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './user/admin-home/admin-home.component';
import { CreateHotelComponent } from './user/create-hotel/create-hotel.component';
import { CreatePackageComponent } from './user/create-package/create-package.component';
import { ListOrganizationComponent } from './user/list-organization/list-organization.component';
import { ListHotelComponent } from './user/list-hotel/list-hotel.component';
import { ListPackageComponent } from './user/list-package/list-package.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { ContactusComponent } from './user/contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PackagesComponent,
    BookingsComponent,
    BookNowComponent,
    AdminHomeComponent,
    CreateHotelComponent,
    CreatePackageComponent,
    ListOrganizationComponent,
    ListHotelComponent,
    ListPackageComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
