import { CommunicateService } from 'src/app/services/communicate/communicate.service';

import { NgsComponent } from './ngs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgsComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    CommunicateService
  ],
  exports: [ NgsComponent ]
})

export class NgsModule { }
