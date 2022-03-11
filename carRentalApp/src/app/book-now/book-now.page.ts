import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookedPage } from '../booked/booked.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {

  selectedSlide: any;
  segment = 0
  sliderOptions = {
      initialSlide: 0,
      slidesPerView: 3,
      speed: 400
  }
  sliderBrands = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 400
  }
  sliderBanner = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 400
  }

  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 160,
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000
    },
  };

  constructor(private modalCtrl: ModalController, private router: Router) { }
  

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: BookedPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.6,
    });
    await modal.present();
  }

  

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/view-car'])
  }


}
