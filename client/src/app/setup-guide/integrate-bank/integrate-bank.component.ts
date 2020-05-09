import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-integrate-bank',
  templateUrl: './integrate-bank.component.html',
  styleUrls: ['./integrate-bank.component.css']
})
export class IntegrateBankComponent implements OnInit {
  input: boolean = true;

  toggle() {
    this.input = false;
  }

  constructor(private router: Router) { }



  ngOnInit() {
  }
  Desired() {
    this.router.navigateByUrl('setup-guide/desired-outcome')
  }
  Manual() {
    this.router.navigateByUrl('setup-guide/manual')
  }

  onPlaidSuccess(event) {
    // Send the public token to your server so you can do the token exchange.
    this.router.navigate(['setup-guide/setup-complete'])

  }

  onPlaidExit(event) {
    // Get errors or exit reason.
  }

  onPlaidEvent(event) {
    // Log events so you can have insight into how your users are using plaid link.
  }

  onPlaidLoad(event) {
    // Do something when the iframe loads.
  }

  onPlaidClick(event) {
    // Do something when the button is clicked.
  }

}
