import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainAdminPageRoutingModule } from './main-admin-routing.module';

import { MainAdminPage } from './main-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainAdminPageRoutingModule
  ],
  declarations: [MainAdminPage]
})
export class MainAdminPageModule {}
