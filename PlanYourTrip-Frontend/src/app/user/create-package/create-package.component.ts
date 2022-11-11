import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelPackService } from 'src/app/hotel-pack.service';
import { HotelService } from 'src/app/hotel.service';
import { OrganizationService } from 'src/app/organization.service';
import { PackageService } from 'src/app/package.service';
@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {

  constructor(private orgService : OrganizationService ,
    private packService : PackageService ,
    private hotPackService : HotelPackService ,
    private hotelService : HotelService,
    private router : Router) { }

    organization : any;
    organizationId : any;
    hotels : any;
    packs : any;

    packName : any;
    packCity : any;
    packPrice : any;
    packRating : any;
    hotelId : any;

  ngOnInit(): void {
    this.hotelService.getAllHotel().subscribe(
      data => {
        this.hotels = data;
      }
    )
  }
  onSubmit(){
    var hot ={
      "packName": this.packName,
        "packRating": this.packRating,
        "packPrice": this.packPrice,
        "packCity": this.packCity
    }

    this.packService.addNewPack(hot,this.hotelId).subscribe(
      data =>{
        this.router.navigate(['/list-package']);
      }
    )

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
