import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAlumnoPage } from './p-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: PAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAlumnoPageRoutingModule {}
