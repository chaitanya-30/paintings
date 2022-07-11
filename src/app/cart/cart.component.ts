import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { painting } from '../shared/model/painting';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems:painting[]=[];
  grandTotal:number=0;
  constructor(private datas:DataService) { 
    this.cartitems=datas.cartItems;
  }

  ngOnInit(): void {
  }
  deletecartitem(image:painting){
    this.cartitems=this.cartitems.filter( item => item.id!=image.id);
    this.datas.cartItems=this.cartitems;
 
  }
  ngAfterContentChecked(){
  this.grandTotal = 0;
this.cartitems.forEach(element => {
  console.log(element.price);
 this.grandTotal=this.grandTotal+element.price;
 
});
//  return grandTotal;

  }
 
}
