import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my_appointments',
        loadChildren: () => import('../my-appointments/my-appointments.module').then(m => m.MyAppointmentsPageModule)
      },
      {
        path: 'insight',
        loadChildren: () => import('../insight/insight.module').then(m => m.InsightPageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
      },  
       {
        path: 'my_account',
        loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/my_appointments',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/my_appointments',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
