import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { IgetUser } from 'src/app/core/services/models/auth.model';
import { ToastrCustomService } from 'src/app/core/services/toastr/toastr-custom.service';

@Component({
  selector: 'app-admin-gerenciar-user',
  templateUrl: './admin-gerenciar-user.component.html',
  styleUrls: ['./admin-gerenciar-user.component.scss']
})
export class AdminGerenciarUserComponent implements OnInit {

  public users$!: Observable<IgetUser[]>;

  constructor(
    private userService: UserService,
    private toastrService: ToastrCustomService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.users$ = this.userService.getAllDataFiltered(value)
  }

  public getUserData() {
    this.users$ = this.userService.listarUsers();
  }

  public excluirUser(id: string) {
    const userId = id;
    this.userService.excluirUser(userId).subscribe(() => {
      this.toastrService.success('Usuário deletado.', 'Sucesso');
      this.getUserData()
    }, err => {
      this.toastrService.error('Algo deu errado, tente novamente mais tarde.', 'Erro');
    })
  }

}
