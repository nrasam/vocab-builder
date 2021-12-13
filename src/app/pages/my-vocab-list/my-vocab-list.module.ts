import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyVocabListPageRoutingModule } from './my-vocab-list-routing.module';

import { MyVocabListPage } from './my-vocab-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyVocabListPageRoutingModule
  ],
  declarations: [MyVocabListPage]
})
export class MyVocabListPageModule {}
