import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienciaLaboralPage } from './experiencia-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaLaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienciaLaboralPageRoutingModule {}
