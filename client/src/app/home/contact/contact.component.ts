import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  imgClose = "assets/images/close.png"
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ChangePage(){
    this.router.navigateByUrl('home');
  }

}
