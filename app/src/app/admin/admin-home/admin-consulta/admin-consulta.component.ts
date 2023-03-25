import { ToastrCustomService } from 'src/app/core/services/toastr/toastr-custom.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { PutLivroModalComponent } from 'src/app/shared/modals/put-livro-modal/put-livro-modal.component';
import { Ibooks } from 'src/app/shared/models/book.model';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-admin-consulta',
  templateUrl: './admin-consulta.component.html',
  styleUrls: ['./admin-consulta.component.scss']
})
export class AdminConsultaComponent implements OnInit {

  public allBook$!: Observable<Ibooks[]>;
  public showBookForm!: FormGroup;

  constructor(
    private bookService: BookService,
    private _fb: FormBuilder,
    private modalService: NgbModal,
    private toastrService: ToastrCustomService
  ) { }

  ngOnInit(): void {
    this.showBookForm = this._fb.group({
      nome: [''],
      descricao: [''],
      autor: ['']
    })
    this.allBook$ = this.bookService.getAllBooks();
  }

  public getAllBooks(){
    this.allBook$ = this.bookService.getAllBooks();
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.allBook$ = this.bookService.getAllDataFiltered(value)
  }

  public visualizar(content: any, book: Ibooks){
    this.showBookForm.patchValue(book)
    this.modalService.open(content, { centered: true });
  }

  public atualizarLivro(book: Ibooks) {
    const modalRef = this.modalService.open(PutLivroModalComponent, {
      centered: true,
      size: 'sm',
      modalDialogClass: 'modal-rounded'
    });
    modalRef.componentInstance.dados = book;
    modalRef.result.then((resultado) => {
      this.getAllBooks();
    }).catch((err) => {
      this.getAllBooks();
    });
  }

  public excluirLivro(id: string) {
    this.bookService.adminExcluirBook(id).subscribe((res)=> {
      console.log(res)
      this.getAllBooks();
      this.toastrService.warning('Livro excluido com sucesso.', 'Atenção')
    }, err => {
      this.toastrService.error('Ops, algo deu errado ,tente novamente mais tarde.', 'Erro')
      console.log(err)
    })
  }


}
