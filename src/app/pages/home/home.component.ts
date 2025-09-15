import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { HttpClientModule } from '@angular/common/http';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { AsideNavComponent } from '../../components/aside-nav/aside-nav.component';
import { VoucherCarouselComponent } from '../../components/voucher-carousel/voucher-carousel.component';
import { FormsModule } from '@angular/forms';
import { CarrosselCategoryComponent } from '../../components/carrossel/carrossel-category/carrossel-category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PrimengModule,
    HttpClientModule,
    CarrosselComponent,
    AsideNavComponent,
    VoucherCarouselComponent,
    FormsModule,
    CarrosselCategoryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
