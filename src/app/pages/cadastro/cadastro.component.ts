import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { fadeSlide } from '../../core/animations.module';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [PrimengModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  animations: [fadeSlide]
})
export class CadastroComponent {
  cadastroForm!: FormGroup;

  constructor (private formBuilder : FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

    onSubmit() {
    console.log("===== FORMULÁRIO =====");
    console.log("Valores:", this.cadastroForm.value);

  }


}
