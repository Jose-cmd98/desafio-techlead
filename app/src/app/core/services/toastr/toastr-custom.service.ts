import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ToastrCustomService {

  constructor(
    private toastr: ToastrService
  ) { }

  success(message: string, title: string = 'Sucesso') {
    this.toastr.success(message, title);
  }

  error(message: string, title: string = 'Erro') {
    this.toastr.error(message, title);
  }

  warning(message: string, title: string = 'Atenção') {
    this.toastr.warning(message, title);
  }
}
