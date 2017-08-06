import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-evnt',
  templateUrl: './evnt.component.html',
  styleUrls: ['./evnt.component.css']
})
export class EvntComponent implements OnInit {

  @Output()
  custEv: EventEmitter<any>;

  dt: string;
  constructor() {
    this.custEv = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  chngDt() {
    this.dt = new Date().toString();
    this.custEv.emit({ dt: this.dt, pos: 0 });
  }
}
