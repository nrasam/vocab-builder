import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-word',
    loadChildren: () => import('./pages/new-word/new-word.module').then( m => m.NewWordPageModule)
  },
  {
    path: 'my-vocab-list',
    loadChildren: () => import('./pages/my-vocab-list/my-vocab-list.module').then( m => m.MyVocabListPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'vocab-list-detail/:id',
    loadChildren: () => import('./pages/vocab-list-detail/vocab-list-detail.module').then( m => m.VocabListDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
