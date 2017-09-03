import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb',
  template: `
    <div class="well">
      Fb Token is {{tkn}}
      <input type="button" class="btn btn-primary pull-right" value="Okay" (click)="ngOnInit()">
    </div>
  `,
  styles: []
})
export class FbComponent implements OnInit {

  tkn: string;

  constructor(
    private web: WebService
  ) { }

  ngOnInit() {
    this.tkn = this.web.getToken();
  }
}
