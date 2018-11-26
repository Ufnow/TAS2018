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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users } from '../model/Users';
var UsersService = /** @class */ (function () {
    function UsersService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080/api/users/';
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    UsersService.prototype.getUsers = function () {
        return this._http.get(this.baseUrl).pipe(map(function (data) { return data; }));
    };
    UsersService.prototype.getUser = function (id) {
        return this._http.get(this.baseUrl + "/" + id);
    };
    UsersService.prototype.deleteUser = function (id) {
        return this._http.delete(this.baseUrl + "/" + id, { headers: this.httpHeaders });
    };
    UsersService.prototype.updateUser = function (user) {
        return this._http.put(this.baseUrl, Users, { headers: this.httpHeaders });
    };
    UsersService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl, Users, { headers: this.httpHeaders });
    };
    UsersService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UsersService);
    return UsersService;
}());
export { UsersService };
//# sourceMappingURL=users.service.js.map