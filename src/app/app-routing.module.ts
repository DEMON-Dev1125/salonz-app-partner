import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: '',
    redirectTo: 'phone-number',
    pathMatch: 'full'
  },    
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./phone-number/phone-number.module').then( m => m.PhoneNumberPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'my-appointments',
    loadChildren: () => import('./my-appointments/my-appointments.module').then( m => m.MyAppointmentsPageModule)
  },
  {
    path: 'appointment-info',
    loadChildren: () => import('./appointment-info/appointment-info.module').then( m => m.AppointmentInfoPageModule)
  },
  {
    path: 'insight',
    loadChildren: () => import('./insight/insight.module').then( m => m.InsightPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'send-to-bank',
    loadChildren: () => import('./send-to-bank/send-to-bank.module').then( m => m.SendToBankPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'set-address',
    loadChildren: () => import('./set-address/set-address.module').then( m => m.SetAddressPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'connect-us',
    loadChildren: () => import('./connect-us/connect-us.module').then( m => m.ConnectUsPageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
