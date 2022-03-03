import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatereviewPage } from './createreview.page';

const routes: Routes = [
  {
    path: '',
    component: CreatereviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatereviewPageRoutingModule {}
