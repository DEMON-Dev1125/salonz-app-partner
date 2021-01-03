import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
 
import { InsightPageRoutingModule } from './insight-routing.module';

import { InsightPage } from './insight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    InsightPageRoutingModule
  ],
  declarations: [InsightPage]
})
export class InsightPageModule {}
