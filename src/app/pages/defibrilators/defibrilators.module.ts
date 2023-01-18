import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefibrilatorsPageRoutingModule } from './defibrilators-routing.module';

import { DefibrilatorsPage } from './defibrilators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefibrilatorsPageRoutingModule
  ],
  declarations: [DefibrilatorsPage]
})
export class DefibrilatorsPageModule {}
