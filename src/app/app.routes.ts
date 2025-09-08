import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';

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
    path: 'home',
    component: HomeComponent,
  },
];
