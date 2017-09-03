import { MyService } from './my.service';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

  private em: EventEmitter<string>;

  token: string;

  constructor(
    private my: MyService
  ) {
    this.em = new EventEmitter<string>();
  }

  getToken(): string {
    this.token = '' + new Date().getMilliseconds();
    this.em.emit(this.token);
    return `${this.token + this.my.nm}`;
  }

  subscribeForToken(abc: any) {
    this.em.subscribe((strTkn: string) => {
      if (strTkn.length >= 3) {
        throw new Error('Invalid data');
      }
      abc(strTkn);
    });
  }
}
