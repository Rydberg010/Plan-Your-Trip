import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/organization.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router : Router , private orgService : OrganizationService) { }

  name : any;
  ngOnInit(): void {
  }
  onSubmit(){
    var org ={
      "organizationName" : this.name
    }
    this.orgService.addOrganization(org).subscribe(
      data =>{
        this.router.navigate(['/list-organization'])
      }
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
