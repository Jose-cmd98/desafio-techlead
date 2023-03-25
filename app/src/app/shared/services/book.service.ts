import { Ibooks } from './../models/book.model';
import {  Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public books$!: any;
  public allBooks$!: any;

  constructor(
    private http: HttpClient
  ) { }

  // filtra a variavel userbooks$ de acordo com o event input do usuario
  getDataFiltered(searchText: string): Observable<Ibooks[]> {
    return of(this.books$.filter((item: Ibooks) =>
      item.nome.toLowerCase().includes(searchText.toLowerCase())
    ));
  }
  // alldata filtered
  getAllDataFiltered(searchText: string): Observable<Ibooks[]> {
    return of(this.allBooks$.filter((item: Ibooks) =>
      item.nome.toLowerCase().includes(searchText.toLowerCase())
    ));
  }

  // book by user
  public getUserBook(): Observable<Ibooks[]> {
    return this.http.get<Ibooks[]>(`${API}/books/myBooks`).pipe(
      tap((res)=>{
        this.books$ = res;
      })
    )
  }

  public getAllBooks(): Observable<Ibooks[]> {
    return this.http.get<Ibooks[]>(`${API}/books/all`).pipe(
      tap((res) => {
        this.allBooks$ = res;
      })
    )
  }

  // post book
  public addBook(books: Ibooks): Observable<Ibooks> {
    return this.http.post<Ibooks>(`${API}/books`, books)
  }


  public putBooks(putBookForm: Ibooks, id: string): Observable<Ibooks> {
    const body = putBookForm;
    return this.http.put<Ibooks>(`${API}/books/${id}`, body)
  }

  public excluirBook(id: string): Observable<Ibooks> {
    return this.http.delete<Ibooks>(`${API}/books/${id}`)
  }

  // admin put books
  public putAdminBooks(putBookForm: Ibooks, id: string): Observable<Ibooks> {
    const body = putBookForm;
    return this.http.put<Ibooks>(`${API}/books/admin/${id}`, body)
  }
  // admin delete books
  public adminExcluirBook(id: string): Observable<Ibooks> {
    return this.http.delete<Ibooks>(`${API}/books/admin/${id}`)
  }
}
