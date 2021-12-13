import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VocabListDetailPageRoutingModule } from './vocab-list-detail-routing.module';

import { VocabListDetailPage } from './vocab-list-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VocabListDetailPageRoutingModule
  ],
  declarations: [VocabListDetailPage]
})
export class VocabListDetailPageModule {}
