import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName : any;
  emailId : any;
  password : any;
  user : any;

  constructor(private registrationService : RegistrationService ,
              private router : Router) { }

  ngOnInit(): void {
  }

  onRegistration(){
    this.user={
      "userName" : this.userName ,
      "emailId" : this.emailId,
      "password" : this.password
    }

    this.registrationService.userRegistration(this.user).subscribe(
      data =>
      {
        alert("Registration Successfull");
        this.router.navigate(['/login']);
      }
    )


  }
}
