import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    forgot : boolean = true;
    status : boolean = true;
    Display(){
        this.forgot = !this.forgot;
        this.status = !this.status;
    }

}
