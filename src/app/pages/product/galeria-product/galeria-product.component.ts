import { Component, Input, OnInit } from '@angular/core';
import { PrimengModule } from '../../../core/PrimeModule';

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
}
@Component({
  selector: 'app-galeria-product',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './galeria-product.component.html',
  styleUrl: './galeria-product.component.scss',
})
export class GaleriaProductComponent implements OnInit {
  @Input() image!: string;
  images: Image[] = [];

  ngOnInit() {
    this.updateImages();
  }

  ngOnChanges() {
    this.updateImages();
  }

  private updateImages() {
    this.images = Array(6).fill({
      itemImageSrc: this.image,
      thumbnailImageSrc: this.image,
    });
  }
}
