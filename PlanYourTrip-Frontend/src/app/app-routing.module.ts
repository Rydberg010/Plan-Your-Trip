import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { AdminHomeComponent } from './user/admin-home/admin-home.component';
import { BookNowComponent } from './user/book-now/book-now.component';
import { BookingsComponent } from './user/bookings/bookings.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { CreateHotelComponent } from './user/create-hotel/create-hotel.component';
import { CreatePackageComponent } from './user/create-package/create-package.component';
import { HomeComponent } from './user/home/home.component';
import { ListHotelComponent } from './user/list-hotel/list-hotel.component';
import { ListOrganizationComponent } from './user/list-organization/list-organization.component';
import { ListPackageComponent } from './user/list-package/list-package.component';
import { LoginComponent } from './user/login/login.component';
import { PackagesComponent } from './user/packages/packages.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:'',component: LoginComponent
  },
  {
    path : 'login' , component: LoginComponent
  },
  {
    path:'register',component: RegisterComponent
  },
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'bookings',component: BookingsComponent
  },
  {
    path: 'package',component: PackagesComponent
  },
  {
    path:'book-now',component: BookNowComponent
  },
  {
    path:'admin-home',component: AdminHomeComponent
  },
  {
    path:'create-hotel',component: CreateHotelComponent
  },
  {
    path:'create-package',component:CreatePackageComponent
  },
  {
    path:'list-organization',component:ListOrganizationComponent
  },
  {
    path:'list-hotel',component:ListHotelComponent
  },
  {
    path:'list-package',component:ListPackageComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'contactus',component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
