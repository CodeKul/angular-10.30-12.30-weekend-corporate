import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-same',
  template: `
   <div class="row">
     <div class="col-md-12">
       <input type="text" ><input type="button" class="btn btn-primary"/>
     </div>
   </div>
  `,
  styles: []
})
export class HelloSameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
