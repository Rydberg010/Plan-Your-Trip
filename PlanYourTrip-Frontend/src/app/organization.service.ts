import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor( private http : HttpClient) { }

  public getOrganization() : Observable<any>{
    return this.http.get<any>("http://localhost:8080/organization");
  }

  public getAllHotelByOrganizationId(orgId : any):Observable<any>{
    return this.http.post("http://localhost:8080/organization/hotels?id="+orgId,orgId)
  }

  public addOrganization(org : any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/create-organization",org);
  }
}
