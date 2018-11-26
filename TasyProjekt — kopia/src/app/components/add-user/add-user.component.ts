import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../shared_service/users.service';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { Users } from '../../model/Users';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent implements OnInit {
  users: Users[];
  constructor(private formBuilder: FormBuilder, private router: Router, private service: UsersService) { }
  loading = false;
  submitted = false;
  addForm: FormGroup;
  get login(){
    return this.addForm.get('login')
   
  }
  goLogin() {
    this.router.navigate(['/users/username/ufnow'], { queryParams: { order: 'login' } });
  }
  ngOnInit() {
    {
      this.service.getUsers().subscribe(data => (this.users = data));
    }
    this.addForm = this.formBuilder.group({
      id: [],
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required],
      permission: ['', Validators.required]
    });
  }
  
  onSubmit() {
    
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    
    
    // if (this.service.getUserByLogin(this.addForm.value.login) !== null )
    // {
    //   console.log(this.service.getUserByLogin(this.addForm.value.login).subscribe(data => {
    //     ()
    //   }
    //     )
      
    //   );
    // }

    // else {
    this.loading = true;
    console.log(this.addForm.value);
    //this.service.getUserByLogin(this.addForm.value)
    this.service.createUser( this.addForm.value ) 
    .pipe(first())
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
   } }

