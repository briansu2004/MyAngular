import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListRolesComponent } from './list-roles/list-roles.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    ListRolesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
