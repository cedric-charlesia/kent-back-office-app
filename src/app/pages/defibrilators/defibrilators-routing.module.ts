import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefibrilatorsPage } from './defibrilators.page';

const routes: Routes = [
  {
    path: '',
    component: DefibrilatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefibrilatorsPageRoutingModule {}
