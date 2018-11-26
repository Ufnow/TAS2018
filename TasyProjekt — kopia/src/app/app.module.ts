import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ListUsersComponent } from './components/list-users/list-users.component';


import { ROUTES } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { UniqueLoginValidatorDirective } from './shared_service/unique-login-validator.directive';
// import { CompareValidatorDirective } from './shared_service/compare-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    
    EditUserComponent,
    
    AddUserComponent,
    
    ListProductComponent,

    EditProductComponent,

    AddProductComponent,

    UniqueLoginValidatorDirective,

    // CompareValidatorDirective,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
