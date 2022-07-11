import { Injectable } from '@angular/core';
import { painting } from './model/painting';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartItems: painting[]=[];
  wishlisted:painting[]=[];
  constructor() { }

  gallery = [
    { id:1,
      title: "Hibiscus Mallow",
      img:"./assets/paintings/gallery10.png",
      price: 25000,
      selected:false
    },
    {id:2,
      title: "Ducks Pond",
      img:"./assets/paintings/gallery2.png",
      price: 25000,
      selected:false
    },
    {id:3,
      title: "Dogs Love",
      img: "./assets/paintings/gallery6.png",
      price: 25000,
      selected:false
    },
    {id:4,
      title: "Flame Darkness",
      img: "/assets/paintings/gallery22.png",
      price: 25000,
      selected:false
    },
    {id:5,
      title: "Flower",
      img: "./assets/paintings/gallery24.png",
      price: 25000,
      selected:false
    },
    {id:6,
      title: "Lady Thinking",
      img: "./assets/paintings/gallery12.png",
      price: 25000,
      selected:false
    },
    {id:7,
      title: "Pink Flowers",
      img: "./assets/paintings/gallery20.png",
      price: 25000,
      selected:false
    },
    {id:8,
      title: "The Yellow Sparrow",
      img: "./assets/paintings/gallery18.png",
      price: 25000,
      selected:false
    },
    {id:9,
      title: "Forest with Pond",
      img: "./assets/paintings/gallery13.png",
      price: 25000,
      selected:false
    },
    {id:10,
      title: "Childhood Memories",
      img: "./assets/paintings/gallery5.png",
      price: 25000,
      selected:false
    },
    {id:11,
      title: "The Scientist",
      img: "./assets/paintings/gallery21.png",
      price: 25000,
      selected:false
    },
    {id:12,
      title: "Dream House",
      img: "./assets/paintings/About-us.png",
      price: 25000,
      selected:false
    },
    {id:13,
      title: "Swimming Pool",
      img: "./assets/paintings/gallery11.png",
      price: 25000,
      selected:false
    },
    {id:14,
      title: "Son following father's footsteps",
      img: "./assets/paintings/gallery15.png",
      price: 25000,
      selected:false
    },
    {id:15,
      title: "Nature",
      img: "./assets/paintings/gallery4.png",
      price: 25000,
      selected:false
    },
    {id:16,
      title: "Rising Sun Flower",
      img: "./assets/paintings/gallery19.png",
      price: 25000,
      selected:false
    },
    {id:17,
      title: "Beautifull Lady",
      img: "./assets/paintings/gallery23.png",
      price: 25000,
      selected:false
    },
    {id:18,
      title: "Beauty of girl",
      img: "./assets/paintings/gallery9.png",
      price: 25000,
      selected:false
    },
  ]
}
