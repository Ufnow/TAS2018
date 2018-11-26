import { Component, OnInit } from '@angular/core';
import { Users } from '../../model/Users';
import { UsersService } from '../../shared_service/users.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: Users[];
  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => (this.users = data));
  }
  deleteUser(users: Users): void {
    swal({
      title: 'Jestes pewien?',
      text: `Czy na pewno chcesz usunąć użytkownika ${users.login} ${
        users.password
      }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Usuń!',
      cancelButtonText: 'Anuluj'
    }).then(result => {
      if (result.value) {
        this.service.deleteUser(users.id).subscribe(data => {
          this.users = this.users.filter(c => c !== users);
        });

        swal('Użytkownik został usunięty', 'success');
      }
    });
  }

  editUser(users: Users): void {
    localStorage.removeItem('editUsersId');
    localStorage.setItem('editUsersId', users.id.toString());
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }
  listProduct(): void {
    this.router.navigate(['list-product']);
  }
}

