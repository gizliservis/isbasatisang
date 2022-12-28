import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Stok } from '../models/product';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class ProductService {
  apiUrl="http://localhost/isbasatis.WebApi/api/Data/";
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<Stok[]>{
    let newPath=this.apiUrl+"StokListele"
   return this.httpClient.get<Stok[]>(newPath);
   }
   getProductsByCategory(kategoriadi:string):Observable<Stok[]>{
    let newPath=this.apiUrl+"StokListeleId?kategoriadi="+kategoriadi
    return this.httpClient.get<Stok[]>(newPath);
    }
}
