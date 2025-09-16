import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TokenService } from './token/token.service';
import { environment } from '../../environments/environment';
import { User } from '../models/user.interface';

interface AuthResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.render;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  cadastrar(pessoaUsuaria: User): Observable<User> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, pessoaUsuaria)
      .pipe(
        map(res => {
          this.tokenService.salvarToken(res.token); // salva o token automaticamente
          return res.user;
        })
      );
  }

  login(email: string, senha: string): Observable<User> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, senha })
      .pipe(
        map((res: any) => { // usar any ou criar interface correta
          const token = `${res.tokenType} ${res.accessToken}`;
          this.tokenService.salvarToken(token); // salva o token no formato "Bearer ..."
          return res.user;
        })
      );
  }

  logout(): void {
  this.tokenService.removerToken(); // remove token do localStorage
  console.log('Logout: token removido', localStorage.getItem('token')); // deve ser null
}
}
