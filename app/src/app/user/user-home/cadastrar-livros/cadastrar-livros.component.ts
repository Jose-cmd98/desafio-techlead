import { ToastrCustomService } from './../../../core/services/toastr/toastr-custom.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookService } from './../../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ibooks } from 'src/app/shared/models/book.model';
import { PutLivroModalComponent } from 'src/app/shared/modals/put-livro-modal/put-livro-modal.component';

@Component({
  selector: 'app-cadastrar-livros',
  templateUrl: './cadastrar-livros.component.html',
  styleUrls: ['./cadastrar-livros.component.scss']
})
export class CadastrarLivrosComponent implements OnInit {

  public userBook$!: Observable<Ibooks[]>;
  public bookLength!: number;
  public addBookForm!: FormGroup;

  constructor(
    private modalService: NgbModal,
    private bookService: BookService,
    private _fb: FormBuilder,
    private toastrService:  ToastrCustomService
    ) { }

  ngOnInit(): void {
    this.getBooks()
    this.userBook$ = this.bookService.getUserBook();
    this.userBook$.subscribe(
      (data) => this.bookLength = data.length,
      (error) => console.log(error)
    );
    console.log(this.userBook$)
    this.addBookForm = this._fb.group({
      nome: [''],
      descricao: [''],
      autor: ['']
    })

  }
  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.userBook$ = this.bookService.getDataFiltered(value)
  }


  public openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

  public addBook(): void {
    const formValue = this.addBookForm.value;
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString();
    const data_cadastro = `${dia}/${mes}/${ano}`;
    const bookBody = {...formValue, data_cadastro}
    this.bookService.addBook(bookBody).subscribe((res) =>{
      this.modalService.dismissAll();
      this.toastrService.success('Livro cadastrado.', 'Sucesso')
      this.getBooks();
    }, err => {
      this.toastrService.error('Ops, algo deu errado, tente novamente mais tarde.', 'Erro')
      console.log(err)
    })
    console.log(bookBody);
  }

  public getBooks() {
    this.userBook$ = this.bookService.getUserBook();
  }

  // atualizar livro
  public atualizarLivro(book: Ibooks) {
    const modalRef = this.modalService.open(PutLivroModalComponent, {
      centered: true,
      size: 'sm',
      modalDialogClass: 'modal-rounded'
    });

    modalRef.componentInstance.dados = book;
    modalRef.result.then((resultado) => {
      this.getBooks();
    }).catch((err) => {
      this.getBooks();
    });
  }

  public excluirLivro(id: string) {
    this.bookService.excluirBook(id).subscribe((res)=> {
      console.log(res)
      this.getBooks();
      this.toastrService.warning('Livro excluido com sucesso.', 'Atenção')
    }, err => {
      this.toastrService.error('Ops, algo deu errado ,tente novamente mais tarde.', 'Erro')
      console.log(err)
    })
  }

}
