import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.page.html',
  styleUrls: ['./createreview.page.scss'],
})
export class CreatereviewPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

    selectedSlide: any;
  segment = 0

  sliderBrands = {
    initialSlide: 0,
    slidesPerView: 2.5,
    speed: 400
  }


  constructor(private router: Router) { 
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

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/view-car'])
  }

}
