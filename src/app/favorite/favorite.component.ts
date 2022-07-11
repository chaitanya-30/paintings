import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { painting } from '../shared/model/painting';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  wishlisted:painting[]=[];
  cartitems:painting[]=[];
  constructor(private datas:DataService) { 
    this.wishlisted=datas.wishlisted;
  }

  ngOnInit(): void {
  }
  addtocart(image:painting){
    this.cartitems=this.datas.cartItems;
    this.cartitems.push(image);
    this.datas.cartItems=this.cartitems;
    
    }
}
