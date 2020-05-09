import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confim-delete',
  templateUrl: './confim-delete.component.html',
  styleUrls: ['./confim-delete.component.css']
})
export class ConfimDeleteComponent implements OnInit {
  content = "We're always looking to improve. Please help us out by tellings us your reason for leaving."
  placeHolder = "Room for improvement? Simply don't require our services anymore? Let us know."

  constructor() { }

  ngOnInit() {
  }

}
