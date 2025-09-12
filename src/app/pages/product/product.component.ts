import { Component, OnInit, model } from '@angular/core';
import { ProductService } from '../home/service/product.service';
import { IProduct } from '../../models/products.interface';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { PrimengModule } from '../../core/PrimeModule';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../../components/rating/rating.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [PrimengModule, FormsModule, CommonModule, RatingComponent, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.productForm = new FormBuilder().group({
      color: ['red'],
      size: [''],
      quantity: [1],
    });
  }
  product!: IProduct;
  images: any[] = [];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.product = data['product'];
      this.images = [
        {
          itemImageSrc: data['product'].image,
          thumbnailImageSrc: data['product'].image,
        },
        {
          itemImageSrc: data['product'].image,
          thumbnailImageSrc: data['product'].image,
        },
        {
          itemImageSrc: data['product'].image,
          thumbnailImageSrc: data['product'].image,
        },
        {
          itemImageSrc: data['product'].image,
          thumbnailImageSrc: data['product'].image,
        },
      ];

      if (!this.product) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  isInvalid(form: FormGroup): boolean {
    return !this.productForm.value.color && form.invalid;
  }

  submitForm() {
    console.log(this.productForm.value);
  }
}
