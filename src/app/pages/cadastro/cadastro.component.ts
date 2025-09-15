import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from './services/cadastro.service';
import { PrimengModule } from '../../core/PrimeModule';
import { fadeSlide } from '../../core/animations.module';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  animations: [fadeSlide]
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cadastroService: CadastroService) {
    this.cadastroForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const usuario = this.cadastroForm.value;

    this.cadastroService.cadastrar(usuario).subscribe({
      next: user => {
        console.log('Usuário cadastrado e logado automaticamente:', user);
        alert(`Bem-vindo, ${user.name}!`);
      },
      error: err => {
        console.error('Erro ao cadastrar usuário:', err);
        console.log(this.cadastroForm.value);
        alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
      }
    });
  }
}
