import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token : string){
    return localStorage.setItem(KEY, token);
  }
  
  removerToken(){
    return localStorage.removeItem(KEY);
  }

  getToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  possuiToken(){
    return !!this.getToken();
  }
}
