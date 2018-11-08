import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'password', component: ForgotPasswordComponent},
  {path: 'info', component: UserInfoComponent},
  {path: 'edit', component: EditFormComponent},
  {path: 'user-list', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingNodule {

}
