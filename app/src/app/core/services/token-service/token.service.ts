import { Injectable } from '@angular/core';

const KEY = 'authToken';
const KEY_ROLE = 'admin';
const User_Name = 'user'


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(){
    return !!this.getToken();
  }

  setToken(token:string){
    localStorage.setItem(KEY, token);
  }

  setIsAdmin(isAdmin:string){
    localStorage.setItem(KEY_ROLE, isAdmin);
  }

  setUser(user: string){
    localStorage.setItem(User_Name, user);
  }

  getUser(){
    return localStorage.getItem(User_Name);
  }


  getToken(){
    return localStorage.getItem(KEY);
  }

  getRole(){
    const isTrue = (localStorage.getItem(KEY_ROLE) === 'true');
    return isTrue;
  }
  removeToken(){
    localStorage.removeItem(KEY);
  }
  destroyToken(){
    localStorage.clear();
  }
}
