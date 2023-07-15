import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoluntariadoPage } from './voluntariado.page';

const routes: Routes = [
  {
    path: '',
    component: VoluntariadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntariadoPageRoutingModule {}
