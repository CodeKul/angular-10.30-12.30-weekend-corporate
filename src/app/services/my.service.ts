
import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
    nm: string;
    myNm() { return this.nm; }
}
