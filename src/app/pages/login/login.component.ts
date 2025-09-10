import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
