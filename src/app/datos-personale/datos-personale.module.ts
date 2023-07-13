import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPersonalePageRoutingModule } from './datos-personale-routing.module';

import { DatosPersonalePage } from './datos-personale.page';
import { HttpClient } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPersonalePageRoutingModule,
  ],
  providers:[HttpClient],
  declarations: [DatosPersonalePage]
})
export class DatosPersonalePageModule {}
