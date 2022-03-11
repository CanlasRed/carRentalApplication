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

  booking = [{
    carname: 'Ford Ranger Wildtrak',
    status: 'Pending',
  },
  {
    carname: 'Ford Ranger Wildtrak',
    status: 'Pending',
  },
];

  favorites = [{
    carname: 'Ford Ranger Wildtrak',
  },
  {
    carname: 'Ford Ranger Wildtrak',
  },
];

  history = [{
    carname: 'Ford Ranger Wildtrak',
    price: '₱ 200/hr'
  },
  {
    carname: 'Ford Ranger Wildtrak',
    price: '₱ 200/hr'
  },
];

  type: string;

  constructor(private modalCtrl: ModalController, private router: Router) { }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: RecentTransactionPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8
      
      
    });
    await modal.present();
  }

  // async favorites() {
  //   const modal = await this.modalCtrl.create({
  //     component: FavoritePage,
  //     breakpoints: [0, 0.3, 0.5, 0.8],
  //     initialBreakpoint: 0.8
      
      
  //   });
  //   await modal.present();
  // }

  ngOnInit() {
    this.type = 'first';
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  logout(){
    this.router.navigate(['/login'])
  }


}
