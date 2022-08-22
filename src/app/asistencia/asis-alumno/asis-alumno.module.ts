import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisAlumnoPageRoutingModule } from './asis-alumno-routing.module';

import { AsisAlumnoPage } from './asis-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisAlumnoPageRoutingModule
  ],
  declarations: [AsisAlumnoPage]
})
export class AsisAlumnoPageModule {}
