import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-panel',
  template: `
    <input class="btn btn-primary" type="button" value="Spider Man" (click)="chngImg(1)">
    <input class="btn btn-primary" type="button" value="Iron Man" (click)="chngImg(2)">
    <input class="btn btn-primary" type="button" value="Hulk" (click)="chngImg(3)">
  `,
  styles: []
})
export class BtnPanelComponent implements OnInit {

  @Output()
  imgEv: EventEmitter<string>;

  constructor() {
    this.imgEv = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  chngImg(cnt: number) {
    if (cnt === 1) {
      this.imgEv.emit('https://i.ytimg.com/vi/3R2uvJqWeVg/maxresdefault.jpg');
    }
    if (cnt === 2) {
      this.imgEv.emit('https://static.comicvine.com/uploads/scale_medium/11/113509/5926547-iron+man+homecoming.jpg');
    }
    if (cnt === 3) {
      this.imgEv.emit('http://cdn.movieweb.com/img.news.tops/NEbZRNg3YX0cfc_1_b.jpg');
    }
  }
}
