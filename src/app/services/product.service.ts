import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Stok } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="http://localhost/isbasatis.WebApi/api/Data/StokListele";
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<Stok[]>{
   return this.httpClient.get<Stok[]>(this.apiUrl);
   }
}
