import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import { UserModule } from './user/user.module';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin', //admin guard,
    component: AdminHomeComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'user',
    component: UserHomeComponent,
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
