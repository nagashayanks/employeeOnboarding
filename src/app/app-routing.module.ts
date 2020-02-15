import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard';


const routes: Routes = [
    {

      path: '',
      loadChildren: () => import(`./module/dashboard/dashboard.module`).then(m => m.DashboardModule)
    },
    {

      path: 'home',
      loadChildren: () => import(`./module/dashboard/dashboard.module`).then(m => m.DashboardModule)
    },
    {
      path: 'login',
      loadChildren: () => import(`./module/member/member.module`).then(m => m.MemberModule)
    },
    {
      path: 'admin',
      loadChildren: () => import(`./module/admin/admin.module`).then(m => m.AdminModule),
      canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
