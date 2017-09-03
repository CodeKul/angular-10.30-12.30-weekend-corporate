import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insta',
  template: `
   <div class="well">
     Instagram token is {{tkn}}
   </div>
  `,
  styles: []
})
export class InstaComponent implements OnInit {

  tkn: string;

  constructor(
    private web: WebService
  ) { }

  ngOnInit() {
    let par : InstaComponent = this;
    this.tkn = this.web.token;
    this.web.subscribeForToken(function (tkn) {
      par.tkn = tkn;
    });
  }
}
