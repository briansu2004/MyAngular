import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './users/list-roles/list-roles.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'roles', component: ListRolesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
