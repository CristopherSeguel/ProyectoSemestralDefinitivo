import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NFPageRoutingModule } from './nf-routing.module';

import { NFPage } from './nf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NFPageRoutingModule
  ],
  declarations: [NFPage]
})
export class NFPageModule {}
