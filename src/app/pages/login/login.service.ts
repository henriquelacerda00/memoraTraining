import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/user.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../../models/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Api_Url = environment.render;


  constructor(private http: HttpClient) { }

   login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.Api_Url}/auth/login`, { email, password });
  }
}
