var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.urlApi = 'https://localhost:8000';
        this.isLogin = false;
    }
    AuthService.prototype.login = function (formValues) {
        var name = formValues.name, password = formValues.password;
        return this.http.post(this.urlApi + "/login", {
            name: name,
            password: password
        });
    };
    AuthService.prototype.logout = function () {
        this.isLogin = false;
        window.localStorage.clear();
    };
    AuthService.prototype.isAuth = function () {
        return this.isLogin;
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map