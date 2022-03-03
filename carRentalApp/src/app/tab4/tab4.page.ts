import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecentTransactionPage } from '../recent-transaction/recent-transaction.page';
import { FavoritePage } from '../favorite/favorite.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: RecentTransactionPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8
      
      
    });
    await modal.present();
  }

  async favorites() {
    const modal = await this.modalCtrl.create({
      component: FavoritePage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8
      
      
    });
    await modal.present();
  }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/login'])
  }


}
