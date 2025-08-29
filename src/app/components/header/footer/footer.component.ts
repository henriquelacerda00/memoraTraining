import { Component } from '@angular/core';
import { PrimengModule } from '../../../core/PrimeModule';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
