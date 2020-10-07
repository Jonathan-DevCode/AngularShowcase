import { CommunicateService } from 'src/app/services/communicate/communicate.service';

import { ComTwoComponent } from './com-two.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ComTwoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CommunicateService
  ],
  exports: [ ComTwoComponent ]
})

export class ComTwoModule { }
