import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SingleDataService {

  data: Array<string> = ["One", "Two", "Three"];

  constructor() {}

  singleData() {
    return this.data;
  }
  
}
