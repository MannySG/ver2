import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private router: Router) { }
  checkZipCode:number = 0;
  ngOnInit() {
  }
  // zipCode() {
  //   const regZip = new RegExp('/(^\d{5}$)|(^\d{5}-\d{4}$)/');
  //   if (!regZip.test(JSON.stringify(this.checkZipCode))) {
  //     this.router.navigateByUrl('setup-guide/what-you-do')
  //   } else {
  //     console.log('111')
  //   }
  // }
  zipCode(){
    this.router.navigateByUrl('setup-guide/what-you-do')
  }
}
