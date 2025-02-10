import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
  declarations: [
    AddClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    ListClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
