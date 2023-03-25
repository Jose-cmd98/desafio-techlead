import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookService } from './../../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Ibooks } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-consultar-livros',
  templateUrl: './consultar-livros.component.html',
  styleUrls: ['./consultar-livros.component.scss']
})
export class ConsultarLivrosComponent implements OnInit {

  public allBook$!: Observable<Ibooks[]>;
  public showBookForm!: FormGroup;

  constructor(
    private bookService: BookService,
    private _fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.showBookForm = this._fb.group({
      nome: [''],
      descricao: [''],
      autor: ['']
    })
    this.allBook$ = this.bookService.getAllBooks();
    // form
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

}
