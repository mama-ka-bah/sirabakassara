import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrainnementPage } from './entrainnement.page';

const routes: Routes = [
  {
    path: '',
    component: EntrainnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrainnementPageRoutingModule {}
