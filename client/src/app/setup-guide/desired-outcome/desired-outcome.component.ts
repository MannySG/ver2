import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desired-outcome',
  templateUrl: './desired-outcome.component.html',
  styleUrls: ['./desired-outcome.component.css']
})
export class DesiredOutcomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  Marial(){
    this.router.navigateByUrl('setup-guide/marital-status')
  }
}
