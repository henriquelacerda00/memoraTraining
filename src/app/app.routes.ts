import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductResolver } from './pages/product/resolver/product.resolver';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
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
];
