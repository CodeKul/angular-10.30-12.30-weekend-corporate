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
    this.tkn = this.web.token;
  }
}
