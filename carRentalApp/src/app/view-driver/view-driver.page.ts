import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessagePage } from '../message/message.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.page.html',
  styleUrls: ['./view-driver.page.scss'],
})
export class ViewDriverPage implements OnInit {

  constructor(private modalCtrl: ModalController, 
              private router: Router, 
              public alertController: AlertController) { }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: MessagePage,
      breakpoints: [0, 1, 1, 1],
      initialBreakpoint: 1,
    });
    await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Book driver',
      subHeader: 'Are you sure?',
      message: 'Confirm your booking.',
      buttons: ['Confirm', 'Cancel']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  ngOnInit() {
  }


}
