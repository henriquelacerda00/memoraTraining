import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { ContainerComponent } from "../../components/container/container.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [PrimengModule, ContainerComponent ,CommonModule,ReactiveFormsModule,FormsModule ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
value:any

inputStyle = {
  width: '100%',
  padding: '0.7em',
  background: '#F5F5F5',
  border: 'none'
};

firstName:any
lastName:any
email:any
address:any
currentPassword:any
newPassword:any
confirmPassword:any
}
