import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'usuarios/login',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'asis-alumno',
    loadChildren: () => import('./asistencia/asis-alumno/asis-alumno.module').then( m => m.AsisAlumnoPageModule)
  },
  {
    path: 'asis-profesor',
    loadChildren: () => import('./asistencia/asis-profesor/asis-profesor.module').then( m => m.AsisProfesorPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./menu/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'p-alumno',
    loadChildren: () => import('./perfil/p-alumno/p-alumno.module').then( m => m.PAlumnoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
