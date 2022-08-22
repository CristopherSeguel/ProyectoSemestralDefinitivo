import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisProfesorPage } from './asis-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: AsisProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisProfesorPageRoutingModule {}
