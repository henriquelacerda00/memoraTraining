import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { CarouselItems } from './data/items-carousel';

@Component({
  selector: 'app-voucher-carousel',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './voucher-carousel.component.html',
  styleUrl: './voucher-carousel.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class VoucherCarouselComponent {
  products = CarouselItems;
}
