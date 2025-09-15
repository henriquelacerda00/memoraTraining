import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormStyle } from '@angular/common';
import { FormularioService } from '../../core/formulario.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimengModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,private router : Router) {
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
      next: (resposta) => {
        console.log('Login realizado com sucesso:', resposta);
        this.router.navigate(['/']);
      },
      error: (erro) => {
        console.error('Erro ao fazer login:', erro);
        // Exiba uma mensagem de erro para o usuário, se desejar
      }
    });
  }
}
