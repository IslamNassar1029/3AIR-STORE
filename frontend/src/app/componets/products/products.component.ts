import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    counterStart:number=0
    
    productsList: any;
    constructor(private productService: ProductService) {}
    ngOnInit(): void {
      this.productService.getAllProducts().subscribe((response: any)=>{
        this.productsList=response
        console.log(response);
      })
    }
    getCounter(e:number){
      this.counterStart=e
      
      
    }
    
    
  }

