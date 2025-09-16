import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from './token.service';


export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.possuiToken()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};


export const RedirectGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.possuiToken()) {
    // Se já está logado, redireciona para outra rota
    router.navigate(['/perfil']); // ou '/home', etc.
    return false;
  }

  // Se não está logado, pode acessar o login
  return true;
};