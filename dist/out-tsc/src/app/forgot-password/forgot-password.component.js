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
import usernameValidator from '../Validators/usernameValidator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ageValidator from '../Validators/ageValidator';
import toUpperCase from '../shared/toUpperCase';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
        this.formValues = {
            name: '',
            password: ''
        };
        this.validForm = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = new FormGroup({
            name: new FormControl(null, Validators.required, usernameValidator),
            password: new FormControl(null, [Validators.required, ageValidator])
        });
    };
    ForgotPasswordComponent.prototype.submitForm = function () {
        this.validForm = this.forgotForm.valid;
        if (this.validForm) {
            this.formValues.name = toUpperCase(this.forgotForm.value.name);
            this.formValues.password = this.forgotForm.value.password;
        }
    };
    ForgotPasswordComponent = __decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map