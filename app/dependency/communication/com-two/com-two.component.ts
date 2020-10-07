import { CommunicateService } from './../../../services/communicate/communicate.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comTwo',
  templateUrl: './com-two.component.html',
  styleUrls: ['./com-two.component.css'],
  providers: [CommunicateService]
})

export class ComTwoComponent implements OnInit, DoCheck {

  communication: Array<string> = [];

  constructor( private _communicate: CommunicateService ) {}

  ngOnInit(): void {
   CommunicateService.communicateEvent.subscribe( update => this.communication.push(update) );
  }

  ngDoCheck(): void {
    this.communication = this._communicate.getCommunicate();
  }

}
