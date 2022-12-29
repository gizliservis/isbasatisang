import { Component, OnInit } from '@angular/core';
import { Stok } from 'src/app/models/product';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { group } from '@angular/animations';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Stok[]=[];
  colDefs:ColDef[]=[
    {field:'Id'},
    {field:'Durumu'},
    {field:'StokKodu'},
    {field:'StokAdi'},
    {field:'StokGrubu'},
    {field:'BarkodTuru'},
    {field:'AlisFiyati1'},
    {field:'AlisFiyati2'},
    {field:'AlisFiyati3'},
    {field:'AlisFiyati1'},


    
  ];
  defaultColDef:ColDef={
    sortable:true,
    filter:true,
    enableRowGroup:true,
    resizable:true
  }
    
  
  dataLoaded=false;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private httpClient:HttpClient){}
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
