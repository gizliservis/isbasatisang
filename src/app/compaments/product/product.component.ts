import { Component, OnInit } from '@angular/core';
import { Stok } from 'src/app/models/product';
import{HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Stok[]=[];
  apiUrl="http://localhost/isbasatis.WebApi/api/Data/StokListele";
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
this.httpClient
    .get<Stok[]>(this.apiUrl)
    .subscribe((response)=>{
      this.products=response
});
  }

}
