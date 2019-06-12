import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'perfil', 
    loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'alunosinstituicao', 
    loadChildren: './alunosinstituicao/alunosinstituicao.module#AlunosinstituicaoPageModule' },
  { path: 'alunoinfo', loadChildren: './alunoinfo/alunoinfo.module#AlunoinfoPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
