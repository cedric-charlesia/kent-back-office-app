import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { PageTitleModule } from 'src/app/modules/page-title/page-title.module';
import { PageDescriptionModule } from 'src/app/modules/page-description/page-description.module';
import { HeaderNavigationMenuModule } from 'src/app/modules/header-navigation-menu/header-navigation-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    PageTitleModule,
    PageDescriptionModule,
    HeaderNavigationMenuModule,
  ],
  declarations: [OrdersPage],
})
export class OrdersPageModule {}
