import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosConocimientosPageRoutingModule } from './otros-conocimientos-routing.module';

import { OtrosConocimientosPage } from './otros-conocimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosConocimientosPageRoutingModule
  ],
  declarations: [OtrosConocimientosPage]
})
export class OtrosConocimientosPageModule {}
