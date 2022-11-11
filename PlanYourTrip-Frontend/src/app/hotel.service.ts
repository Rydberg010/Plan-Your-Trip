import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http : HttpClient) { }

  public getAllHotel() : Observable<any>{
    return this.http.get<any>("http://localhost:8080/hotels");
  }

  public addHotelByOrganizationId(id : any , hot : any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/create-hotel?id="+id , hot);
  }
}
