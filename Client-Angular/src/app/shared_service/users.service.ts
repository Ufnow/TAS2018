import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private baseUrl:string='http://localhost:8080/api/users';
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

constructor(private _http:HttpClient) { }

getUsers (): Observable<Users[]> {
  return this._http.get(this.baseUrl).pipe(map(data => data as Users[]));
    
}
getUser(id: number): Observable<Users> {
  return this._http.get<Users>(`${this.baseUrl}/${id}`);
}


deleteUser(id: number): Observable<Users> {
  return this._http.delete<Users>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
}
updateUser(user: Users): Observable<Users> {
  return this._http.put<Users>(this.baseUrl, user, {headers: this.httpHeaders});
}
createUser(user: Users): Observable<Users[]> {
  
  return this._http.post<Users[]>(this.baseUrl, user, {headers: this.httpHeaders});
  
}

}
