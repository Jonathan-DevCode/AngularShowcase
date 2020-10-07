import { RouteOneRoutingModule } from './route-one.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteOneComponent } from './route-one.component';



@NgModule({
  declarations: [RouteOneComponent],
  imports: [
    CommonModule,
    RouteOneRoutingModule
  ],
  exports: [ RouteOneComponent ]
})
export class RouteOneModule { }
