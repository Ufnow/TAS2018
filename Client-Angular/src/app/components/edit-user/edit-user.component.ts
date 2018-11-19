import { Component, OnInit } from '@angular/core';
import { Users } from '../../model/Users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../shared_service/users.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: []
})
export class EditUserComponent implements OnInit {

  users: Users;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UsersService) { }

  ngOnInit() {

    const usersId = localStorage.getItem('editUsersId');

    if ( !usersId ) {
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
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-users']);
        swal({
          position: 'top',
          type: 'success',
          title: `Użytkownik zmodyfikowany poprawnie`,
          showConfirmButton: false,
          timer: 2000
        });
      },
      error => {
        alert(error);
      });
  }

}
