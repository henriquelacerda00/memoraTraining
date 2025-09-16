import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductResolver } from './pages/product/resolver/product.resolver';
import { authGuard, RedirectGuard,  } from './autenticacao/token/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RedirectGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [RedirectGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolver,
    },
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
  
];
