import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { painting } from '../shared/model/painting';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
gallery:painting[]=[];
wishlisted:painting[]=[];
cartitems:painting[]=[];
  constructor(private datas:DataService) {
    this.gallery = datas.gallery;
    this.cartitems=this.datas.cartItems; }

  ngOnInit(): void {
  }
 addtowishlist(image:painting){
  image.selected=true;
  this.wishlisted.push(image);
  this.datas.wishlisted=this.wishlisted;
 }
 addtocart(image:painting){
  this.cartitems=this.datas.cartItems;
  this.cartitems.push(image);
  this.datas.cartItems=this.cartitems;
  
  }
}
