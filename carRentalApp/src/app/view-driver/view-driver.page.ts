import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessagePage } from '../message/message.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.page.html',
  styleUrls: ['./view-driver.page.scss'],
})
export class ViewDriverPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: MessagePage,
      breakpoints: [0, 1, 1, 1],
      initialBreakpoint: 1,
    });
    await modal.present();
  }


  ngOnInit() {
  }


}
