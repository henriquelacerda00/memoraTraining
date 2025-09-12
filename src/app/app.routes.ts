import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
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
    path: '**',
    component: NotfoundComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolver,
    },
  },
];
