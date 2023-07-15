import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdesPage } from './ides.page';

const routes: Routes = [
  {
    path: '',
    component: IdesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdesPageRoutingModule {}
