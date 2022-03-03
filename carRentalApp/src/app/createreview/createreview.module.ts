import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatereviewPageRoutingModule } from './createreview-routing.module';

import { CreatereviewPage } from './createreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatereviewPageRoutingModule
  ],
  declarations: [CreatereviewPage]
})
export class CreatereviewPageModule {}
