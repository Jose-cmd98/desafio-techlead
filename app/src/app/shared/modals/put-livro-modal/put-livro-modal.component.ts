import { ToastrCustomService } from './../../../core/services/toastr/toastr-custom.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-put-livro-modal',
  templateUrl: './put-livro-modal.component.html',
  styleUrls: ['./put-livro-modal.component.scss']
})
export class PutLivroModalComponent implements OnInit {
  @Input() dados: any;

  public putBookForm!: FormGroup;
  public userRole!: boolean;

  constructor(
    private _fb: FormBuilder,
    private bookService: BookService,
    private ngbModalService: NgbModal,
    private toaStrService: ToastrCustomService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.putBookForm = this._fb.group({
      nome: [''],
      descricao: [''],
      autor: [''],
    })
    this.putBookForm.patchValue(this.dados)
    this.userRole = this.userService.returnRole()
  }

  public putAccordingRole() {
    if(this.userRole == true){
      this.adminPut()
    } else {
      this.putBook();
     }
  }

  public putBook(){
    const formValue = this.putBookForm.value;
    const bookId = this.dados._id;
    this.bookService.putBooks(formValue, bookId).subscribe((res) => {
        this.toaStrService.success('Livro atualizado!', "Sucesso");
        this.ngbModalService.dismissAll()
      }, err => {
        this.toaStrService.error('Algo deu errado, tente novamente mais tarde.', 'Erro');
      })
  }

  public adminPut() {
    const formValue = this.putBookForm.value;
    const bookId = this.dados._id;
    this.bookService.putAdminBooks(formValue, bookId).subscribe((res) => {
      this.toaStrService.success('Livro atualizado!', "Sucesso");
      this.ngbModalService.dismissAll()
    }, err => {
      this.toaStrService.error('Algo deu errado, tente novamente mais tarde.', 'Erro');
    })
  }

}
