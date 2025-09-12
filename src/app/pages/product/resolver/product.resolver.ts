import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductService } from '../../home/service/product.service';
import { IProduct } from '../../../models/products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    const id = Number(route.paramMap.get('id'));
    return this.productService.listarProduto(id);
  }
}
