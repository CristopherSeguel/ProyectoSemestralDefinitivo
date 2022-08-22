import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PAlumnoPageRoutingModule } from './p-alumno-routing.module';

import { PAlumnoPage } from './p-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PAlumnoPageRoutingModule
  ],
  declarations: [PAlumnoPage]
})
export class PAlumnoPageModule {}
