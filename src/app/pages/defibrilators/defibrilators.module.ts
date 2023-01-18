import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefibrilatorsPageRoutingModule } from './defibrilators-routing.module';

import { DefibrilatorsPage } from './defibrilators.page';
import { PageTitleModule } from 'src/app/modules/page-title/page-title.module';
import { PageDescriptionModule } from 'src/app/modules/page-description/page-description.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefibrilatorsPageRoutingModule,
    PageTitleModule,
    PageDescriptionModule,
  ],
  declarations: [DefibrilatorsPage],
})
export class DefibrilatorsPageModule {}
