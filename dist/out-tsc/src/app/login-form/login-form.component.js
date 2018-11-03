var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import usernameValidator from '../Validators/usernameValidator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import toUpperCase from '../shared/toUpperCase';
import { UsersService } from '../shared/services/users.service';
import { AuthService } from '../shared/services/auth.service';
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(http, userService, authService) {
        this.http = http;
        this.userService = userService;
        this.authService = authService;
        this.urlApi = 'https://localhost:8000';
        this.formValues = {
            name: '',
            password: ''
        };
        this.validForm = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = new FormGroup({
            name: new FormControl(null, Validators.required, usernameValidator),
            password: new FormControl(null, [Validators.required])
        });
    };
    LoginFormComponent.prototype.submitForm = function () {
        this.validForm = this.loginForm.valid;
        if (this.validForm) {
            this.formValues.name = toUpperCase(this.loginForm.value.name);
            this.formValues.password = this.loginForm.value.password;
            this.authService.login(this.formValues)
                .subscribe(function (user) { return console.log(user); });
        }
    };
    LoginFormComponent = __decorate([
        Component({
            selector: 'app-login-form',
            templateUrl: './login-form.component.html',
            styleUrls: ['./login-form.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient,
            UsersService,
            AuthService])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
export { LoginFormComponent };
//# sourceMappingURL=login-form.component.js.map