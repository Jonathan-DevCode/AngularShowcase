import { NoCliModule } from './no-cli/no-cli.module';
import { ProvidedModule } from './provided/provided.module';
import { CommunicationModule } from './communication/communication.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyComponent } from './dependency.component';

@NgModule({
  declarations: [ 
    DependencyComponent
  ],
  imports: [
    CommonModule,
    CommunicationModule,
    NoCliModule,
    ProvidedModule
  ],
  exports: [ DependencyComponent ] 
})
export class DependencyModule { }
