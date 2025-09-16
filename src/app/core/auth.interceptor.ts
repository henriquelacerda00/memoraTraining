import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../autenticacao/token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenService = this.injector.get(TokenService); 
    const token = tokenService.getToken();

    // Se o token existir, adiciona no header
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: token.startsWith('Bearer ') ? token : `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    }

    // Se não houver token (logout), não adiciona
    return next.handle(req);
  }
}
