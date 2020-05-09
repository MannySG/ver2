import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    Manual(){
        this.router.navigateByUrl('setup-guide/manual')
    }
    Complete(){
        
        this.router.navigateByUrl('setup-guide/setup-complete')
    }
}
