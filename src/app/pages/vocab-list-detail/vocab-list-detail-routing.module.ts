import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabListDetailPage } from './vocab-list-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VocabListDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocabListDetailPageRoutingModule {}
