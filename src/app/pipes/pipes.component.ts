import { WebEmulationService } from './web-emulation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  private rupees: number;
  private dt: Date;
  private mobOs: string;
  private num: string;
  private asy: Promise<string>;
  private mobiles = [
    'Android',
    'iOS',
    'Samsung',
    'Windows',
    'BB',
    'Nokia',
    'Chiana'
  ];

  constructor(
    private web: WebEmulationService
  ) {
    this.rupees = 100;
    this.dt = new Date();
    this.mobOs = `Android`;
    this.num = `97625488356`;

    this.asy = new Promise((res, rej) => {
      setTimeout(() => {
        this.num = `1234567890`;

        res(`web prosessing done`);
      }, 5000);
    });
  }

  ngOnInit() {
    this.web.load(res => {
      this.mobOs = `jeelo`;
    });
  }

  newOs(os: string) {
    this.mobiles.push(os);
  }
}
