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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import usernameValidator from '../Validators/usernameValidator';
import ageValidator from '../Validators/ageValidator';
import dateOfBirthValidator from '../Validators/dateOfBirthValidator';
import dateOfLoginValidator from '../Validators/dateOfLoginValidator';
import dateOfNotificationValidator from '../Validators/dateOfNotificationValidator';
import * as moment from 'moment';
import toUpperCase from '../shared/toUpperCase';
var EditFormComponent = /** @class */ (function () {
    function EditFormComponent() {
        this.formValues = {
            name: '',
            age: '',
            dateOfBirth: '',
            dateOfLogin: '',
            dateOfNotification: ''
        };
        this.validForm = false;
    }
    EditFormComponent.prototype.ngOnInit = function () {
        this.editForm = new FormGroup({
            name: new FormControl(null, Validators.required, usernameValidator),
            age: new FormControl(null, [Validators.required, ageValidator]),
            dateOfBirth: new FormControl(null, [Validators.required, dateOfBirthValidator]),
            dateOfLogin: new FormControl(null, [Validators.required, dateOfLoginValidator]),
            dateOfNotification: new FormControl(null, [Validators.required, dateOfNotificationValidator])
        });
    };
    EditFormComponent.prototype.submitForm = function () {
        this.validForm = this.editForm.valid;
        if (this.validForm) {
            this.formValues.name = toUpperCase(this.editForm.value.name);
            this.formValues.age = this.editForm.value.age;
            this.formValues.dateOfBirth = moment(this.editForm.value.dateOfBirth).format('DD MMMM YYYY');
            this.formValues.dateOfLogin = moment(this.editForm.value.dateOfLogin).format('DD MMMM YYYY');
            this.formValues.dateOfNotification = moment(this.editForm.value.dateOfNotification).format('DD MMMM YYYY');
        }
    };
    EditFormComponent = __decorate([
        Component({
            selector: 'app-edit-form',
            templateUrl: './edit-form.component.html',
            styleUrls: ['./edit-form.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EditFormComponent);
    return EditFormComponent;
}());
export { EditFormComponent };
//# sourceMappingURL=edit-form.component.js.map