import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../../models/user.interface';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../../autenticacao/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private Api_Url = environment.render;

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  cadastrar(pessoaUsuaria: User): Observable<User> {
    return this.httpClient.post<User>(`${this.Api_Url}/auth/register`, pessoaUsuaria);
  }
}