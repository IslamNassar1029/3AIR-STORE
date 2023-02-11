import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  productId:any
  productArr:any
  product:any
  constructor(private activatedRoute :ActivatedRoute , private productService:ProductService){
    this.productId=activatedRoute.snapshot.params['id']
    console.log(this.productId)
  }
  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe((response)=>{
      this.productArr=response
      this.product=this.productArr[0]
      

    })
  }


}
