import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
