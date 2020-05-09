import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {
  state = "befor";

  text : Boolean = true;
  textToggle(){
    this.text = !this.text;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  NextW2(){
    this.router.navigateByUrl('setup-guide/w2')
  }

  Whatyoudo(){
    this.router.navigateByUrl('setup-guide/what-you-do')
  }

}
