import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookNowService {

  constructor( private http : HttpClient) { }

  public getAllBookingByUserId( id : number):Observable<any>{
    return this.http.get<any>("http://localhost:8080/user-pack?userId="+id);
  }
}
