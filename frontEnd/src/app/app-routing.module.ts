import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"dashboard",loadChildren:()=>import("./dashboard/dashboard.module").then(m=>m.DashboardModule)},
{path:"client",loadChildren:()=>import("./client/client.module").then(m=>m.ClientModule)},
{path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
