import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';

@NgModule({
  declarations: [PageTitleComponent],
  imports: [CommonModule, IonicModule],
  exports: [PageTitleComponent],
})
export class PageTitleModule {}
