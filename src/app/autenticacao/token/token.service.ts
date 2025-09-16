import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  removerToken() {
    return localStorage.removeItem(KEY);
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }

    return null;
  }

  possuiToken() {
    return !!this.getToken();
  }
}
