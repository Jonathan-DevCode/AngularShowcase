import { ProvidedComponent } from './provided.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProvidedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ProvidedComponent ]
})

export class ProvidedModule { }
