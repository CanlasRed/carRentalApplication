import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecentTransactionPage } from '../recent-transaction/recent-transaction.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: RecentTransactionPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8
      
      
    });
    await modal.present();
  }

  ngOnInit() {
  }

}
