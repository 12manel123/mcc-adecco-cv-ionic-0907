import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtraInformacioPageRoutingModule } from './otra-informacio-routing.module';

import { OtraInformacioPage } from './otra-informacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtraInformacioPageRoutingModule
  ],
  declarations: [OtraInformacioPage]
})
export class OtraInformacioPageModule {}
