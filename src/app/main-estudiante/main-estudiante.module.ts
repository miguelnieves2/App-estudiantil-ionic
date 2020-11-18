import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainEstudiantePageRoutingModule } from './main-estudiante-routing.module';

import { MainEstudiantePage } from './main-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainEstudiantePageRoutingModule
  ],
  declarations: [MainEstudiantePage]
})
export class MainEstudiantePageModule {}
