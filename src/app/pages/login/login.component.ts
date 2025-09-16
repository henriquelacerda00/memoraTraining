import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormStyle } from '@angular/common';
import { FormularioService } from '../../core/formulario.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../core/notification.service';
import { TokenService } from '../../autenticacao/token/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimengModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private notificationService: NotificationService,
    private tokenService: TokenService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.loginService.login(email, password).subscribe({
  next: (res) => {
    const token = `${res.tokenType} ${res.accessToken}`;
    this.tokenService.salvarToken(token); // Salva o token já no formato Bearer ...
    console.log('Login realizado com sucesso:', res.user);
    this.notificationService.showSuccess('Login realizado com sucesso!');
    this.router.navigate(['/']);
  },
  error: (err) => {
    console.error('Erro ao fazer login:', err);
    this.notificationService.showError('Credenciais inválidas. Tente novamente.');
  }
});
  }
}
