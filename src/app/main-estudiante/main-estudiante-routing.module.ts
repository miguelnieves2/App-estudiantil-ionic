import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainEstudiantePage } from './main-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: MainEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainEstudiantePageRoutingModule {}
