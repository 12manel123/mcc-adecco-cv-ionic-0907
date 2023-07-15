import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiasPage } from './tecnologias.page';

const routes: Routes = [
  {
    path: '',
    component: TecnologiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologiasPageRoutingModule {}
