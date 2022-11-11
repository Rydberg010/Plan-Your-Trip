import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/organization.service';

@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent implements OnInit {

  constructor(private router : Router , private organizationService : OrganizationService) { }
  orgs : any;
  ngOnInit(): void {
    this.organizationService.getOrganization().subscribe(
      data => {
        this.orgs = data;
      }
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
