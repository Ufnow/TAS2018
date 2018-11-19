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
import { UsersService } from '../../shared_service/users.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
var ListUsersComponent = /** @class */ (function () {
    function ListUsersComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    ListUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (data) { return (_this.users = data); });
    };
    ListUsersComponent.prototype.deleteUser = function (users) {
        var _this = this;
        swal({
            title: 'Jestes pewien?',
            text: "Czy na pewno chcesz usun\u0105\u0107 u\u017Cytkownika " + users.login + " " + users.password + "?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Usuń!',
            cancelButtonText: 'Anuluj'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteUser(users.id).subscribe(function (data) {
                    _this.users = _this.users.filter(function (c) { return c !== users; });
                });
                swal('Użytkownik został usunięty', 'success');
            }
        });
    };
    ListUsersComponent.prototype.editUser = function (users) {
        localStorage.removeItem('editUsersId');
        localStorage.setItem('editUsersId', users.id.toString());
        this.router.navigate(['edit-user']);
    };
    ListUsersComponent.prototype.addUser = function () {
        this.router.navigate(['add-user']);
    };
    ListUsersComponent = __decorate([
        Component({
            selector: 'app-list-users',
            templateUrl: './list-users.component.html',
            styleUrls: ['./list-users.component.css']
        }),
        __metadata("design:paramtypes", [Router, UsersService])
    ], ListUsersComponent);
    return ListUsersComponent;
}());
export { ListUsersComponent };
//# sourceMappingURL=list-users.component.js.map