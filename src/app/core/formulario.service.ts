import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  cadastroform!: FormGroup | null

  getCadastro() : FormGroup | null{
    return this.cadastroform
  }

  setCadastro(form : FormGroup){
    this.cadastroform = form
  }


}
