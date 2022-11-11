import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelPackService } from 'src/app/hotel-pack.service';
import { OrganizationService } from 'src/app/organization.service';
import { PackageService } from 'src/app/package.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private orgService : OrganizationService ,
                private packService : PackageService ,
                private hotPackService : HotelPackService ,
                private router : Router) { }

  organization : any;
  organizationId : any;
  hotels : any;
  packs : any;
  ngOnInit(): void {
    this.orgService.getOrganization().subscribe(
      data => {
        this.organization = data;
      }
    )
  }

  onSubmit(){
    console.log(this.organizationId);
    this.orgService.getAllHotelByOrganizationId(this.organizationId).subscribe(
      data => {
        this.hotels = data;
      }
    )

  }

  onClick(id : any){
    console.log(id);
    this.packService.getAllPackByHotelId(id).subscribe(
      data => {
        this.packs = data ;
        this.hotPackService.getData = data ;
        this.router.navigate(['/package'])
      }
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
