import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-confirm',
  templateUrl: './contact-confirm.component.html',
  styleUrls: ['./contact-confirm.component.css']
})
export class ContactConfirmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
}
