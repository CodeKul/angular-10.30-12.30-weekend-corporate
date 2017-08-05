import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evnt',
  templateUrl: './evnt.component.html',
  styleUrls: ['./evnt.component.css']
})
export class EvntComponent implements OnInit {

  dt: string;
  constructor() { }

  ngOnInit() {
  }

  chngDt() {
    this.dt = new Date().toString();
  }
}
