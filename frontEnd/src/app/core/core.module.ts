import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    FooterComponent,
    SideNavComponent,
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,ClarityModule
  ],
  exports: [HeaderComponent, SideNavComponent, HeaderComponent]
})
export class CoreModule {
  
 }
