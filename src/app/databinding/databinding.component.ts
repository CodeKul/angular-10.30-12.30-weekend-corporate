import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  nm: string;
  constructor() {
    this.nm = 'codekul angular';
  }

  nmUpper() {
    return this.nm.toUpperCase();
  }

  ngOnInit() {
  }

  emited(str: string) {
    console.log(str);
    this.nm = str;
  }
}
