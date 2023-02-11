import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-items',
  templateUrl: './products-items.component.html',
  styleUrls: ['./products-items.component.css']
})
export class ProductsItemsComponent implements OnInit {


  @Input() productItem:any={}
  @Input() counterStart:number=0
  @Output() myEvent= new EventEmitter()
  addToCart(){
    this.counterStart++
    this.myEvent.emit(this.counterStart)
    console.log(this.counterStart);
    
    
  }
  ngOnInit(): void {
    
  }
}
