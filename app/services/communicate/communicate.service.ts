import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class CommunicateService {

  communicate: Array<string> = ["One", "Two", "Three"];
  static communicateEvent = new EventEmitter<any>();

  constructor() { }

  getCommunicate() {
    return this.communicate;
  }

  addCommunication(param) {
    this.communicate.push(param);
    CommunicateService.communicateEvent.emit(param);
  }
}
