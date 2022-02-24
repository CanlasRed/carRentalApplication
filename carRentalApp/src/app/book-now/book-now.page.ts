import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
