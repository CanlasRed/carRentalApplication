import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewMessagesPage } from '../view-messages/view-messages.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectedSlide: any;
  segment = 0
  sliderOptions = {
      initialSlide: 0,
      slidesPerView: 1.7,
      speed: 400
  }
  sliderBrands = {
    initialSlide: 0,
    slidesPerView: 4,
    speed: 400
  }
  sliderBanner = {
    initialSlide: 0,
    slidesPerView: 1.05,
    speed: 400
  }

  

  constructor(private modalCtrl: ModalController) {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ViewMessagesPage,
      breakpoints: [0, 1, 1, 1],
      initialBreakpoint: 1
      
      
    });
    await modal.present();
  }

}
