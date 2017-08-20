import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-content-proj',
  templateUrl: './content-proj.component.html',
  styleUrls: ['./content-proj.component.css']
})
export class ContentProjComponent implements OnInit {

  @ContentChild('nm')
  nm: ElementRef;
  constructor() { }

  ngOnInit() {
  }



}
