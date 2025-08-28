import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


}
