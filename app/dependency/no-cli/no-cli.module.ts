import { NoCliComponent } from './no-cli.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NoCliComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ NoCliComponent ]
})

export class NoCliModule { }
