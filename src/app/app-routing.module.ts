import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {EditFormComponent} from './edit-form/edit-form.component';


const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'password', component: ForgotPasswordComponent},
  {path: 'info', component: UserInfoComponent, canActivate: [LoginGuard]},
  {path: 'edit', component: EditFormComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingNodule {

}
