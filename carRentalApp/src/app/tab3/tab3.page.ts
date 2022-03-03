import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewDriverPage } from '../view-driver/view-driver.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
      component: ViewDriverPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.97,
    });
    await modal.present();
  }


}
