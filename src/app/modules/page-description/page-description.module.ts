import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PageDescriptionComponent } from 'src/app/components/page-description/page-description.component';

@NgModule({
  declarations: [PageDescriptionComponent],
  imports: [CommonModule, IonicModule],
  exports: [PageDescriptionComponent],
})
export class PageDescriptionModule {}
