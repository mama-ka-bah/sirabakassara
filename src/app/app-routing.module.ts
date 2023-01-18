import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'permis',
    loadChildren: () => import('./pages/permis/permis.module').then( m => m.PermisPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'entrainnement',
    loadChildren: () => import('./pages/entrainnement/entrainnement.module').then( m => m.EntrainnementPageModule)
  },
  {
    path: 'conseil',
    loadChildren: () => import('./pages/conseil/conseil.module').then( m => m.ConseilPageModule)
  },
  {
    path: 'panneaux',
    loadChildren: () => import('./pages/panneaux/panneaux.module').then( m => m.PanneauxPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
