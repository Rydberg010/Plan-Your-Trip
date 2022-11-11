import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelPackService } from 'src/app/hotel-pack.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor( private hotPackService : HotelPackService ,
                private router : Router) { }

  packs : any;
  ngOnInit(): void {
    this.packs = this.hotPackService.getData;
    console.log(this.packs);

  }

  gotoPack(id : any){
    console.log(id);
    this.hotPackService.getPackId = id;
    this.router.navigate(['/book-now'])
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
