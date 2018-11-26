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
import { UsersService } from '../../shared_service/users.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, router, service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var usersId = localStorage.getItem('editUsersId');
        if (!usersId) {
            alert('Akcja niedozwolona');
            this.router.navigate(['list-users']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            login: ['', Validators.required],
            password: ['', Validators.required],
            permission: ['', Validators.required]
        });
        this.service.getUser(+usersId)
            .subscribe(function (data) {
            _this.editForm.setValue(data);
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.updateUser(this.editForm.value)
            .pipe(first())
            .subscribe(function (data) {
            _this.router.navigate(['list-users']);
            swal({
                position: 'top',
                type: 'success',
                title: "U\u017Cytkownik zmodyfikowany poprawnie",
                showConfirmButton: false,
                timer: 2000
            });
        }, function (error) {
            alert(error);
        });
    };
    EditUserComponent = __decorate([
        Component({
            selector: 'app-edit-user',
            templateUrl: './edit-user.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [FormBuilder, Router, UsersService])
    ], EditUserComponent);
    return EditUserComponent;
}());
export { EditUserComponent };
//# sourceMappingURL=edit-user.component.js.map