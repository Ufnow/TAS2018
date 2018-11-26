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
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../shared_service/users.service';
import swal from 'sweetalert2';
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, router, service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            login: ['', Validators.required],
            password: ['', Validators.required],
            permission: ['', Validators.required]
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.createUser(this.addForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['list-users']);
            swal({
                position: 'top',
                type: 'success',
                title: "User has been created!",
                showConfirmButton: false,
                timer: 2000,
            });
        });
    };
    AddUserComponent = __decorate([
        Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [FormBuilder, Router, UsersService])
    ], AddUserComponent);
    return AddUserComponent;
}());
export { AddUserComponent };
//# sourceMappingURL=add-user.component.js.map