import { CommunicateService } from './../../../services/communicate/communicate.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comOne',
  templateUrl: './com-one.component.html',
  styleUrls: ['./com-one.component.css'],
  providers: [CommunicateService]
})

export class ComOneComponent implements OnInit, DoCheck {

  communication: Array<string> = []
  communicate = new CommunicateService();
  
  constructor (private _communicate: CommunicateService) {}

  ngOnInit(): void {
    CommunicateService.communicateEvent.subscribe( update => {this.communication.push(update)} )
  }

  pushArray(param): void {
    this._communicate.addCommunication(param);
  }

  ngDoCheck(): void {
    this.communication = this.communicate.getCommunicate();
  }

}
