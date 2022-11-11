import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private http : HttpClient) { }

  public loginUser(email : String , password : String ) : Observable<any>{
    return this.http.get<any>("http://localhost:8080/login?email="+email+"&password="+password);

  }

  public userRegistration(user : any) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/register",user);
  }

}
