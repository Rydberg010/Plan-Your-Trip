import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private registrationService : RegistrationService ,
                  private router : Router) { }

  user : User = new User();
  userName : any;
  password : any;
  msg : any;
  ngOnInit(): void {
  }

  loginUser()
  {
    this.registrationService.loginUser(this.userName,this.password).subscribe(
      data =>{
        console.log("sucess");
        localStorage.setItem('token', JSON.stringify(data));
        if(this.userName === "arunava@gmail.com" && this.password === "1234")
        {
          this.router.navigate(['/admin-home']);
        }
        else{
        this.router.navigate(['/home']);
        }
      },
      error => {
        console.log("Error");
        this.msg="Invalid Credentials"
      }
    )
  }
}
