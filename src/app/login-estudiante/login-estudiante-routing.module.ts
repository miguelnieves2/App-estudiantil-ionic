import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEstudiantePage } from './login-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEstudiantePageRoutingModule {}
