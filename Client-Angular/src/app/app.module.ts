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

@NgModule({
  declarations: [
    AppComponent,
    
    ListUsersComponent,
    
    EditUserComponent,
    
    AddUserComponent
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
