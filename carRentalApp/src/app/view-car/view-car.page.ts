import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookNowPage } from '../book-now/book-now.page';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.page.html',
  styleUrls: ['./view-car.page.scss'],
})
export class ViewCarPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  type: string;

  selectedSlide: any;
  segment = 0
  sliderOptions = {
      initialSlide: 0,
      slidesPerView: 1,
      speed: 400
  }
  sliderBrands = {
    initialSlide: 0,
    slidesPerView: 2.3,
    speed: 400
  }
  sliderBanner = {
    initialSlide: 0,
    slidesPerView: 1.05,
    speed: 400
  }

  constructor(private modalCtrl: ModalController, private router: Router) {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1
        }
      ]
    };


   }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: BookNowPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.7
      
      
    });
    await modal.present();
  }

  ngOnInit() {
    this.type = 'first';
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  back(){
    this.router.navigate(['/tabs/tab1'])
  }

}
