import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCarPageRoutingModule } from './view-car-routing.module';

import { ViewCarPage } from './view-car.page';

import { MbscModule } from '@mobiscroll/angular';

@NgModule({
  imports: [
    CommonModule,
    MbscModule,
    FormsModule,
    IonicModule,
    ViewCarPageRoutingModule
  ],
  declarations: [ViewCarPage]
})
export class ViewCarPageModule {}
