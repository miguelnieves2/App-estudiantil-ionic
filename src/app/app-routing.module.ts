import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-estudiante',
    loadChildren: () => import('./login-estudiante/login-estudiante.module').then( m => m.LoginEstudiantePageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'main-estudiante',
    loadChildren: () => import('./main-estudiante/main-estudiante.module').then( m => m.MainEstudiantePageModule)
  },
  {
    path: 'main-admin',
    loadChildren: () => import('./main-admin/main-admin.module').then( m => m.MainAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
