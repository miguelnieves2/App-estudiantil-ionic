import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainAdminPage } from './main-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MainAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAdminPageRoutingModule {}
