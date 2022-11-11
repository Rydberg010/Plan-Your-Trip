import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/package.service';
@Component({
  selector: 'app-list-package',
  templateUrl: './list-package.component.html',
  styleUrls: ['./list-package.component.css']
})
export class ListPackageComponent implements OnInit {

  constructor(private router : Router , private packService : PackageService) { }

  packs : any;
  ngOnInit(): void {
    this.packService.getAllPack().subscribe(
      data =>
      {
        this.packs = data ;
      }
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
