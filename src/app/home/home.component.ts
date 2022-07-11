import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides:String[]=["/assets/paintings/slider-1.png",
  "/assets/paintings/slider-2.png", 
 "/assets/paintings/slider-3.png"];
  constructor() { }

  ngOnInit(): void {
  }

}
