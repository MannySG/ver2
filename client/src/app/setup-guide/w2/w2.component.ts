import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w2',
  templateUrl: './w2.component.html',
  styleUrls: ['./w2.component.css']
})
export class W2Component implements OnInit {

  public check = false;
  public checked = true;

  public value = "$";

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Method(){
    this.router.navigateByUrl('setup-guide/method')
  }
  Marial(){
    this.router.navigateByUrl('setup-guide/marital-status')
  }

  ShowCheck(){
    this.check = !this.check
  }
  ShowChecked(){
    this.checked = !this.checked;
  }

}
