import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { GalleryComponent } from './gallery/gallery.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
{path:'gallery',component:GalleryComponent},
{path:'contact',component:ContactComponent},
{path:'cart',component:CartComponent},
{path:'fav',component:FavoriteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
