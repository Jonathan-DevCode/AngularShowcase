import { ComOneModule } from './com-one/com-one.module';
import { ComTwoModule } from './com-two/com-two.module';
import { CommunicationComponent } from './communication.component';
import { CommunicateService } from './../../services/communicate/communicate.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
   CommunicationComponent
  ],
  imports: [
    CommonModule,
    ComTwoModule,
    ComOneModule
  ],
  providers: [
    CommunicateService
  ],
  exports: [ CommunicationComponent ]
})
export class CommunicationModule { }
