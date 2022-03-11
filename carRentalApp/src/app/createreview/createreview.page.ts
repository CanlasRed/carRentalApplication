import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { ViewCarPage } from '../view-car/view-car.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.page.html',
  styleUrls: ['./createreview.page.scss'],
})
export class CreatereviewPage implements OnInit {
  
  taskList = [];

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
    initialSlide: 2,
    slidesPerView: 0.9,
  }


  rate = [{
    adjective: 'Accomodating',
  },
  {
    adjective: 'Excellent',
  },
  {
    adjective: 'Fantastic',
  },
  {
    adjective: 'Safe',
  },
];
  taskName: any;


  constructor(private router: Router, public toastController: ToastController) { 
    
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

//   addTask() {
//     if (this.taskName.length > 0) {
//         let task = this.taskName;
//         this.taskList.push(task);
//         this.taskName = "";
//     }
// }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/view-car'])
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Car review sent!',
      duration: 2000,
      position: 'top',
      color: 'success',
      cssClass: 'toast-custom-class'
    });
    toast.present();
    this.router.navigate(['/view-car'])
  }


}
