import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './shared/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'paintings';
  cartlength:number;
  wishlistedlength:number;
  slides:String[]=["/assets/paintings/slider-1.png",
  "/assets/paintings/slider-2.png", 
 "/assets/paintings/slider-3.png"];
 constructor(private router:Router,private datas:DataService){
  this.cartlength=0;
  this.wishlistedlength=0;
 }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  gotoAbout(){
    this.router.navigate(["/about"]);
  }
  gotoHome(){
    this.router.navigate(["/"]);
  }
  gotoGallery(){
    this.router.navigate(["/gallery"]);
  }
  ngAfterContentChecked(){
    if(this.datas.cartItems ){
   this.cartlength=this.datas.cartItems.length;}
   if(this.datas.wishlisted){
this.wishlistedlength=this.datas.wishlisted.length;
    }
  }
}
