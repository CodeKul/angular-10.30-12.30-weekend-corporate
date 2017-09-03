import { EventEmitter } from '@angular/core';
export class WebService {

  private em: EventEmitter<string>;

  token: string;

  constructor() {
    this.em = new EventEmitter<string>();
  }

  getToken(): string {
    this.token = '' + new Date().getMilliseconds();
    this.em.emit(this.token);
    return `${this.token}`;
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
