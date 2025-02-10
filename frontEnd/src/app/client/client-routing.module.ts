import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './client.module';

const routes: Routes = [
  {path:"",component:ClientModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
