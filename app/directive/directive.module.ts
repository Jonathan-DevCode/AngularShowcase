import { NgsModule } from './ngs/ngs.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';


@NgModule({
  declarations: [
    DirectiveComponent
  ],
  imports: [
    CommonModule,
    NgsModule
  ],
  exports: [ DirectiveComponent ]
})

export class DirectiveModule { }
