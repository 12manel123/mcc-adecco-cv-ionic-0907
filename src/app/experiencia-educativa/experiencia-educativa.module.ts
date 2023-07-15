import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienciaEducativaPageRoutingModule } from './experiencia-educativa-routing.module';

import { ExperienciaEducativaPage } from './experiencia-educativa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciaEducativaPageRoutingModule
  ],
  declarations: [ExperienciaEducativaPage]
})
export class ExperienciaEducativaPageModule {}
