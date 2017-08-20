import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isWell: boolean;

  myStyle = {
    border: '1px solid red'
  };
  constructor() { }

  ngOnInit() {
  }

  changeBorder() {
    this.isWell = !this.isWell;
    this.myStyle.border = '3px solid green';
  }
}
