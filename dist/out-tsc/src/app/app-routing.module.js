var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
var routes = [
    { path: 'login', component: LoginFormComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'password', component: ForgotPasswordComponent }
];
var AppRoutingNodule = /** @class */ (function () {
    function AppRoutingNodule() {
    }
    AppRoutingNodule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingNodule);
    return AppRoutingNodule;
}());
export { AppRoutingNodule };
//# sourceMappingURL=app-routing.module.js.map