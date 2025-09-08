import { Component } from '@angular/core';
import { PrimengModule } from '../../../core/PrimeModule';
import { createMayBeForwardRefExpression } from '@angular/compiler';

@Component({
  selector: 'app-carrossel-category',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './carrossel-category.component.html',
  styleUrl: './carrossel-category.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class CarrosselCategoryComponent {
  categorias: string[] = [
    'mobile',
    'desktop',
    'smartwatch',
    'headphone',
    'gaming'
  ];

   responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 1
    }
  ];
}
