import { Routes } from '@angular/router';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
export const ROUTES: Routes = [
    
  { path: 'add-user', component: AddUserComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'list-user', component: ListUsersComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-user' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-user' }
];