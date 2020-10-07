import { RouteTwoRoutingModule } from './route-two.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteTwoComponent } from './route-two.component';

@NgModule({
  declarations: [RouteTwoComponent],
  imports: [
    CommonModule,
    RouteTwoRoutingModule
  ],
  exports: [ RouteTwoComponent ]
})

export class RouteTwoModule { }
