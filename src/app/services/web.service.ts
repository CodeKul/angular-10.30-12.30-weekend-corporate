export class WebService {

  token: string;

  constructor() { }

  getToken(): string { return `${this.token = '' + new Date().getMilliseconds()}`; }

}
