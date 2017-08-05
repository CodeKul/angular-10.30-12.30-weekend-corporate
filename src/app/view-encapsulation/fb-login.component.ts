import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-login',
  template: `
    <div class="row">
      <div class="col-md-12">
        <h1> Login with fb</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
      <img src="https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697057-facebook-512.png" alt="codekul.com" width="100" heigh="100">
      </div>
    </div>
  `,
  styles: []
})
export class FbLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
