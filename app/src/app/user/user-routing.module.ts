import { PaginaInicialComponent } from './user-home/pagina-inicial/pagina-inicial.component';
import { CadastrarLivrosComponent } from './user-home/cadastrar-livros/cadastrar-livros.component';
import { ConsultarLivrosComponent } from './user-home/consultar-livros/consultar-livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent
  },
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent
  },
  {
    path: 'consultar-livros',
    component: ConsultarLivrosComponent
  },
  {
    path: 'cadastrar-livros',
    component: CadastrarLivrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
