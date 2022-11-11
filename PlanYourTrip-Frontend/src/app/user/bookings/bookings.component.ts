import { Component, OnInit } from '@angular/core';
import { BookNowService } from 'src/app/book-now.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor( private bookingService : BookNowService,
    private router : Router) { }

  userPack : any;
  session : any;
  ngOnInit(): void {

    let data : any = localStorage.getItem('token');
    this.session = JSON.parse(data);

    this.bookingService.getAllBookingByUserId(this.session.userId).subscribe(
      data =>{
        this.userPack = data;
        console.log(data);
      }
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
