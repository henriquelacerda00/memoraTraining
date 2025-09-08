import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product, CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { AsideNavComponent } from '../../components/aside-nav/aside-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimengModule, HttpClientModule, CarrosselComponent, AsideNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
