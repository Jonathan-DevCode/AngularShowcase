import { CommunicateService } from 'src/app/services/communicate/communicate.service';

import { ComOneComponent } from './../com-one/com-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ComOneComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CommunicateService
  ],
  exports: [ ComOneComponent ]
})

export class ComOneModule { }
