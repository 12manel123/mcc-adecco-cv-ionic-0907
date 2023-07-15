import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnologiasPageRoutingModule } from './tecnologias-routing.module';

import { TecnologiasPage } from './tecnologias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnologiasPageRoutingModule
  ],
  declarations: [TecnologiasPage]
})
export class TecnologiasPageModule {}
