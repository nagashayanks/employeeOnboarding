import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TsmsComponent } from './tsms/tsms.component';
import { LsmsComponent } from './lsms/lsms.component';

const routes: Routes = [
    {
      path: 'tsms',
      component: TsmsComponent
    },
    {
      path: 'lsms',
      component: LsmsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
