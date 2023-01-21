import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { NavigationMenuComponent } from 'src/app/components/navigation-menu/navigation-menu.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [CommonModule, IonicModule, RouterModule, RouterLink],
  exports: [NavigationMenuComponent],
})
export class NavigationMenuModule {}
