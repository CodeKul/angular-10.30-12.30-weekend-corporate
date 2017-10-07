import { Injectable } from '@angular/core';

@Injectable()
export class WebEmulationService {

  resSts: string;
  constructor() {
  }

  load(callBack: any): void {
    let pro: Promise<string> = new Promise((res, rej) => {
      setTimeout(() => {
        callBack({ res: `its okay` });
      }, 2000);
    });
  }
}
