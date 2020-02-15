import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { TsmsComponent } from './tsms/tsms.component';
import { LsmsComponent } from './lsms/lsms.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';


@NgModule({
  declarations: [TsmsComponent, LsmsComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModuleModule
  ]
})
export class ManagementModule { }
