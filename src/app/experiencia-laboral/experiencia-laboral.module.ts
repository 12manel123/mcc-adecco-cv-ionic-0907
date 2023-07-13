import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienciaLaboralPageRoutingModule } from './experiencia-laboral-routing.module';

import { ExperienciaLaboralPage } from './experiencia-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciaLaboralPageRoutingModule
  ],
  declarations: [ExperienciaLaboralPage]
})
export class ExperienciaLaboralPageModule {}
