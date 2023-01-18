import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { DefibrilatorInfoCardComponent } from 'src/app/components/defibrilator-info-card/defibrilator-info-card.component';

@NgModule({
  declarations: [DefibrilatorInfoCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [DefibrilatorInfoCardComponent],
})
export class DefibrilatorInfoCardModule {}
