import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../../../components/carrossel/carrossel.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private ApiUrl = environment.Api_Url;
  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.ApiUrl}/products`);
  }

  listarProduto(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.ApiUrl}/products/${id}`);
  }
}
