import { Injectable } from '@angular/core';

@Injectable()

export class NoCliService {

  noCli: Array<string> = ["One", "Two", "Three"];

  constructor() {}

  noCliData() {
    return this.noCli;
  }
  
}