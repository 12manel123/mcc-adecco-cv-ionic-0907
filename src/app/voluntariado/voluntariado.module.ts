import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoluntariadoPageRoutingModule } from './voluntariado-routing.module';

import { VoluntariadoPage } from './voluntariado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoluntariadoPageRoutingModule
  ],
  declarations: [VoluntariadoPage]
})
export class VoluntariadoPageModule {}
