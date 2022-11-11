import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelPackService {

  constructor(private http : HttpClient) { }

  public getData : any;

  public getPackId : any;

  public packDetailsById(id : any): Observable<any>{
    return this.http.get<any>("http://localhost:8080/packbyid?id="+id);
  }

  public addPackageWithUserId(userPack : any , userId : number , packId : number | any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/user-pack?userId="+userId +"&packId="+packId, userPack);
  }

}
