import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DelteUserComponent } from './delte-user/delte-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    DelteUserComponent,
    UpdateUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
