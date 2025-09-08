import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product, CarrosselComponent } from '../../components/carrossel/carrossel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PrimengModule,
    HttpClientModule,
    CarrosselComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}

