import { Routes } from '@angular/router';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
export const ROUTES: Routes = [
    
  { path: 'add-user', component: AddUserComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'list-user', component: ListUsersComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'edit-product', component: EditProductComponent },
    { path: 'list-product', component: ListProductComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-user' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-user' },
    ];