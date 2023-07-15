import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtraInformacioPage } from './otra-informacio.page';

const routes: Routes = [
  {
    path: '',
    component: OtraInformacioPage
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'ides',
    loadChildren: () => import('./ides/ides.module').then( m => m.IdesPageModule)
  },
  {
    path: 'tecnologias',
    loadChildren: () => import('./tecnologias/tecnologias.module').then( m => m.TecnologiasPageModule)
  },
  {
    path: 'otros-conocimientos',
    loadChildren: () => import('./otros-conocimientos/otros-conocimientos.module').then( m => m.OtrosConocimientosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtraInformacioPageRoutingModule {}
