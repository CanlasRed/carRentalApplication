import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'view-car',
    loadChildren: () => import('./view-car/view-car.module').then( m => m.ViewCarPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'view-driver',
    loadChildren: () => import('./view-driver/view-driver.module').then( m => m.ViewDriverPageModule)
  },
  {
    path: 'book-now',
    loadChildren: () => import('./book-now/book-now.module').then( m => m.BookNowPageModule)
  },
  {
    path: 'recent-transaction',
    loadChildren: () => import('./recent-transaction/recent-transaction.module').then( m => m.RecentTransactionPageModule)
  },  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'view-messages',
    loadChildren: () => import('./view-messages/view-messages.module').then( m => m.ViewMessagesPageModule)
  },
  {
    path: 'booked',
    loadChildren: () => import('./booked/booked.module').then( m => m.BookedPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'createreview',
    loadChildren: () => import('./createreview/createreview.module').then( m => m.CreatereviewPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
