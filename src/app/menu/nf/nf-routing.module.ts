import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NFPage } from './nf.page';

const routes: Routes = [
  {
    path: '',
    component: NFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NFPageRoutingModule {}
