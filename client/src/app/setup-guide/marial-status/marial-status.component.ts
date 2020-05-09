import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app-marial-status',
    templateUrl: './marial-status.component.html',
    styleUrls: ['./marial-status.component.css']
})
export class MarialStatusComponent implements OnInit {

    public check = false;
    public checked = true;

    public value: number = 0;

    constructor(private router: Router) { }

    onAdd() {
        this.value++;
    }
    onSub() {
        if (this.value > 0) {
            this.value--;
        }
        else {
            return;
        }

    }
    ngOnInit() {
    }

    W2() {
        this.router.navigateByUrl('setup-guide/w2')
    }
    Outcome() {
        this.router.navigateByUrl('setup-guide/desired-outcome')
    }

    ShowCheck() {
        this.check = !this.check
    }
    ShowChecked() {
        this.checked = !this.checked;
    }
}
