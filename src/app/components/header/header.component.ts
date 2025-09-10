import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { DropDownComponent } from './drop-down/drop-down.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimengModule, DropDownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
