import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './member/member.component';
import { SharedModuleModule } from '../../shared/shared-module.module';


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    MemberComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModuleModule
  ]
})
export class MemberModule { }
