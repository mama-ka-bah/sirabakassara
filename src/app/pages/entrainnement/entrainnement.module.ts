import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrainnementPageRoutingModule } from './entrainnement-routing.module';

import { EntrainnementPage } from './entrainnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrainnementPageRoutingModule
  ],
  declarations: [EntrainnementPage]
})
export class EntrainnementPageModule {}
