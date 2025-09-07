import { Component } from '@angular/core';
import { VoucherCarouselComponent } from '../../components/voucher-carousel/voucher-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VoucherCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
