import { TokenService } from './../token-service/token.service';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IauthUser, IgetUser, InewUser } from '../models/auth.model';
import { Observable, of } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$: any;

  constructor(
    private _http: HttpClient,
    private tokenService: TokenService
  ) { }

  // users token services
  public saveToken(accessToken: string, isAdmin: any, user: string) {
    this.tokenService.setToken(accessToken);
    this.tokenService.setIsAdmin(isAdmin);
    this.tokenService.setUser(user);
  };
  public returnRole(){
    return this.tokenService.getRole();
  }
  public logout(){
    this.tokenService.destroyToken();
  }
  public islogged(){
    return this.tokenService.hasToken();
  }
  public returnUserName(){
    this.tokenService.getUser();
  }



  // users authenticate services
  public authenticate(loginForm: any): Observable<IauthUser> {
    return this._http.post<IauthUser>(`${API}/auth/login`, {
      ...loginForm
    }).pipe(
      tap((res: any) => {
        const isAdmin = res ['isAdmin'] = res.user == 'Jose teste' || res.user == 'Administrador';
        const authToken = res.token;
        const user = res.user;
        this.saveToken(authToken,isAdmin , user)
      })
    )
  }

  public newUser(newUserForm : InewUser): Observable<InewUser> {
    return this._http.post<InewUser>(`${API}/user`, newUserForm);
  }

  public listarUsers(): Observable<IgetUser[]>{
    return this._http.get<IgetUser[]>(`${API}/user`).pipe(
      tap((res) => {
        this.users$ = res;
      })
    )
  }

  public getAllDataFiltered(searchText: string): Observable<any[]> {
    return of(this.users$.filter((item: IgetUser) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    ));
  }
  public excluirUser(id: string): Observable<IgetUser> {
    return this._http.delete<IgetUser>(`${API}/user/${id}`);
  }
}
