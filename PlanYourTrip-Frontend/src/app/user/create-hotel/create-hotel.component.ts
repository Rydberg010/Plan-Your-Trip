import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelPackService } from 'src/app/hotel-pack.service';
import { HotelService } from 'src/app/hotel.service';
import { OrganizationService } from 'src/app/organization.service';
import { PackageService } from 'src/app/package.service';
@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  constructor( private orgService : OrganizationService ,
    private packService : PackageService ,
    private hotPackService : HotelPackService ,
    private hotelService : HotelService ,
    private router : Router) { }

  organization : any;
  organizationId : any;
  hotels : any;
  packs : any;
  HotelName : any;
  HotelCity : any;
  ngOnInit(): void {
    this.orgService.getOrganization().subscribe(
      data =>{
        this.organization = data ;
      }
    )
  }
  onSubmit(){
    var hot = {
      "hotelName": this.HotelName,
      "hotelCity": this.HotelCity
  }
  this.hotelService.addHotelByOrganizationId(this.organizationId , hot).subscribe(
    data =>{
      this.router.navigate(['/list-hotel'])
    }
  )

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
