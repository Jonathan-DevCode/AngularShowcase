import { RouterModule } from './../router/router.module';
import { CommonModule } from '@angular/common';
import { DependencyModule } from '../dependency/dependency.module';
import { DirectiveModule } from '../directive/directive.module';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DependencyModule,
    DirectiveModule,
    RouterModule
  ],
  exports: [ HomeComponent ]
})

export class HomeModule { }
