import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { ProductService } from '../../pages/home/service/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from "../rating/rating.component";

export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  quantity: number
  image: string,
  category: string,
  rating: {
    rate: number,
    count: number
  }
}

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [PrimengModule, CommonModule, FormsModule, RatingComponent],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent {
 products: Product[] | undefined;

 rateValue = 4.5;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.listarProdutos().subscribe((products) => {
            this.products = products;
        });

       this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}
