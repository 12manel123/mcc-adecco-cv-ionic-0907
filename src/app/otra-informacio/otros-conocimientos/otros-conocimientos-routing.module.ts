import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrosConocimientosPage } from './otros-conocimientos.page';

const routes: Routes = [
  {
    path: '',
    component: OtrosConocimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrosConocimientosPageRoutingModule {}
