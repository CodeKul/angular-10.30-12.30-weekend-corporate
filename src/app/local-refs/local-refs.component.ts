import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css']
})
export class LocalRefsComponent implements OnInit {

  @ViewChild('nm')
  private nm: ElementRef;

  myNm: string;

  constructor() { }

  ngOnInit() {
  }

  myClick() {
    // this.myNm = this.nm.nativeElement.value;
  }
}
