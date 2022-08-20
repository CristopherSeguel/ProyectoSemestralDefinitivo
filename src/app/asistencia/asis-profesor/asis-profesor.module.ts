import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisProfesorPageRoutingModule } from './asis-profesor-routing.module';

import { AsisProfesorPage } from './asis-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisProfesorPageRoutingModule
  ],
  declarations: [AsisProfesorPage]
})
export class AsisProfesorPageModule {}
