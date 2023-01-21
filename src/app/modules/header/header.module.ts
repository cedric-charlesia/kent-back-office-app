import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NavigationMenuModule } from '../navigation-menu/navigation-menu.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    RouterLink,
    NavigationMenuModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
