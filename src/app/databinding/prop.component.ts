import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {

  tmpObj: any;

  anyObj = {
    list: [
      'Android', 'Ios', 'Rim', 'Windows'
    ]
  };
  // @Input('prop')
  @Input()
  custProp: string;

  typ: string;

  constructor() {
    this.typ = 'button';
  }

  ngOnInit() {
    this.typ = 'button';
  }
}
