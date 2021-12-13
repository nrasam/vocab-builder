import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyVocabListPage } from './my-vocab-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyVocabListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyVocabListPageRoutingModule {}
