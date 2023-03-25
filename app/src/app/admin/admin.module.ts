import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { AdminInicioComponent } from './admin-home/admin-inicio/admin-inicio.component';
import { AdminConsultaComponent } from './admin-home/admin-consulta/admin-consulta.component';
import { AdminCadastrarLivroComponent } from './admin-home/admin-cadastrar-livro/admin-cadastrar-livro.component';
import { AdminGerenciarUserComponent } from './admin-home/admin-gerenciar-user/admin-gerenciar-user.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminInicioComponent,
    AdminConsultaComponent,
    AdminCadastrarLivroComponent,
    AdminGerenciarUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    NgbDropdownModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
