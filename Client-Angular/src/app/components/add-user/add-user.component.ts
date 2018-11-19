import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../shared_service/users.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UsersService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      login: ['', Validators.required],
      password: ['', Validators.required],
      permission: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.service.createUser( this.addForm.value ) 
    
    .subscribe(data => {
        this.router.navigate(['list-users']);
        
        swal({
          position: 'top',
          type: 'success',
          title: `User has been created!`,
          showConfirmButton: false,
          timer: 2000,
         
        });
        
      });
  }

}