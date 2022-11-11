import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packDetailsById: any;

  constructor(private http : HttpClient) { }

  public getAllPackByHotelId( id : any):Observable<any>{
    return this.http.get<any>("http://localhost:8080/hotels/packs?id="+id , id);
  }

  public addNewPack(pack : any , id : any ): Observable<any>{
    return this.http.post<any>("http://localhost:8080/create-package?id="+id,pack);
  }

  public getAllPack():Observable<any>{
    return this.http.get<any>("http://localhost:8080/packs");
  }
}
