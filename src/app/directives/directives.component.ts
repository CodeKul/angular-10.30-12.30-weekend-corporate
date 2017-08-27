import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isWell: boolean;

  mobiles = [
    'Android',
    'Samsung',
    'Windows',
    'Mmoto',
    'Nokia',
    'iPhone'
  ];

  ratingAndReview = [
    { rating: 5, review: `Simple rating control for your angular2 applications using bootstrap3. Does not depend of jquery. If you want to use it without bootstrap` },
    { rating: 3, review: `Simple applications . Does not depend of jquery. If you want to use it without bootstrap` },
    { rating: 8, review: `Simple rating control for your angular2 applications using bootstrap3. Does not depend of jquery. If you want to use it without bootstrap` },
    { rating: 10, review: `This repository is for demonstration purposes of how it can be implemented in Angular and is not maintaned. Please fork and maintain your own version of this repository.` }
  ];

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
