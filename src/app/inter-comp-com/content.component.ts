import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="jumbotron">
      <img [src]="imgNm" [alt]="imgNm" width="300" height="300">
    </div>
  `,
  styles: [
    `
      .jumbotron {
        height : 300px;
      }
    `
  ]
})
export class ContentComponent implements OnInit {

  @Input()
  imgNm: string;
  constructor() { }
  ngOnInit() {
  }
}
