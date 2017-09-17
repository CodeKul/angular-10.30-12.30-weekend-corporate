import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  myVal = {
    usNm: '',
    pass: '',
    eml: ''
  };
  constructor() { }

  ngOnInit() {
  }

  myFrmSub(myFrm: NgForm) {
    //console.log(myFrm.value);
    console.log(this.myVal);
  }
}
