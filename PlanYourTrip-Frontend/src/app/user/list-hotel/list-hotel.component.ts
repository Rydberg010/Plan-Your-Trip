import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';
@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {

  hotels : any;
  constructor(private router : Router , private hotelService : HotelService) { }

  ngOnInit(): void {
    this.hotelService.getAllHotel().subscribe(
      data =>{
        this.hotels = data;
      }
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
