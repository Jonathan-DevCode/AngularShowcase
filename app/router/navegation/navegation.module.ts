import { NavegationComponent } from './navegation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationRoutingModule } from './navegation.router.module';


@NgModule({
  declarations: [ NavegationComponent ],
  imports: [
    CommonModule,
    NavegationRoutingModule
  ],
  exports: [ NavegationComponent ]
})

export class NavegationModule { }
