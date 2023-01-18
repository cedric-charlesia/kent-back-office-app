import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { HeaderNavigationMenuComponent } from 'src/app/components/header-navigation-menu/header-navigation-menu.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderNavigationMenuComponent],
  imports: [CommonModule, IonicModule, RouterModule, RouterLink],
  exports: [HeaderNavigationMenuComponent],
})
export class HeaderNavigationMenuModule {}
