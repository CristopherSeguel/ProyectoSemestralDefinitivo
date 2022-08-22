import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisAlumnoPage } from './asis-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AsisAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisAlumnoPageRoutingModule {}
