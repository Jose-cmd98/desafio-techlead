import { AdminGerenciarUserComponent } from './admin-home/admin-gerenciar-user/admin-gerenciar-user.component';
import { AdminCadastrarLivroComponent } from './admin-home/admin-cadastrar-livro/admin-cadastrar-livro.component';
import { AdminConsultaComponent } from './admin-home/admin-consulta/admin-consulta.component';
import { AdminInicioComponent } from './admin-home/admin-inicio/admin-inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminInicioComponent
  },
  {
    path: 'inicio',
    component: AdminInicioComponent
  },
  {
    path: 'consultar-livros',
    component: AdminConsultaComponent
  },
  {
    path: 'cadastrar-livros',
    component: AdminCadastrarLivroComponent
  },
  {
    path: 'gerenciar-users',
    component: AdminGerenciarUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
