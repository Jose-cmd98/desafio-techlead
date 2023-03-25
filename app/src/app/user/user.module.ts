import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { ConsultarLivrosComponent } from './user-home/consultar-livros/consultar-livros.component';
import { CadastrarLivrosComponent } from './user-home/cadastrar-livros/cadastrar-livros.component';
import { PaginaInicialComponent } from './user-home/pagina-inicial/pagina-inicial.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserHomeComponent,
    ConsultarLivrosComponent,
    CadastrarLivrosComponent,
    PaginaInicialComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SidebarModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    FormsModule
  ]
})
export class UserModule { }
