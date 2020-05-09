import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    //Router
    Integrate(){
        this.router.navigateByUrl('setup-guide/integrate-bank')
    }
    LogIn(){
        this.router.navigateByUrl('setup-guide/log-in')
    }

    //Group input
    status: boolean = true;
    display: boolean = true;
    clickEvent(){
        this.display = true;
        this.status = true;       
    }
    clickChange(){
        this.status = false;
        this.display = false;
    }

}
