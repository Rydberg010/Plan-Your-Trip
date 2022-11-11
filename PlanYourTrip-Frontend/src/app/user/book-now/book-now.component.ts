import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelPackService } from 'src/app/hotel-pack.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  session: any;
  _checkIn : Date | undefined;
  _checkOut : Date | undefined;
  public  _numberOfPeople : any;
  _numberOfRooms : number = 0 ;
  _userPack : any;
  totalAmmount : any;

  constructor(private hotelPackService : HotelPackService , private router : Router) { }

  PackId : any;
  packDetails : any;
  packageAmmount : any;
  getUserId : any;
  ngOnInit(): void {
    this.PackId = this.hotelPackService.getPackId;
    console.log(this.PackId);

    let data : any = localStorage.getItem('token');
    this.session = JSON.parse(data);
    console.log(this.session.userId);
  }

  onSubmit(){
    this._userPack = {
      "userPackId" : 0,
      "numberOfPeople":this._numberOfPeople,
      "checkIn" : this._checkIn,
      "checkOut" : this._checkOut,
      "numberOfRooms" : this._numberOfRooms
    }

    this.hotelPackService.packDetailsById(this.PackId).subscribe(
      data => {
        this.packDetails = data ;
        this.packageAmmount = this.packDetails.packPrice;
        console.log(this.packageAmmount);
        this.totalAmmount = this.packageAmmount * this._numberOfRooms ;
         console.log("Total"+this.totalAmmount);
      }
    );
    this.getUserId = this.session.userId;
    console.log(this.getUserId+"user Id")

    this.hotelPackService.addPackageWithUserId(this._userPack , this.getUserId ,this.PackId).subscribe(
      data =>
      {
        alert("booking Successfull");
        this.router.navigate(['/home'])
      }
    )

  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
