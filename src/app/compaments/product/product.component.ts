import { Component, OnInit } from '@angular/core';
import { Stok } from 'src/app/models/product';
import { VirtualTimeScheduler } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Stok[]=[];
  dataLoaded=false;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    if(params["Tanimi"]){
      this.getProductsByCategory(params["Tanimi"]);
    }else{
      this.getProducts();
    }
   })
  }
  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products=response,
      this.dataLoaded=true;})
      
  }
  getProductsByCategory(kategoriadi:string){
    this.productService.getProductsByCategory(kategoriadi).subscribe(response=>{
      this.products=response,
      this.dataLoaded=true;})
      
  }

}
