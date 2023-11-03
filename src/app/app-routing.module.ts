import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AddformComponent } from './addform/addform.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { AddCartComponent } from './add-cart/add-cart.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"add",component:AddformComponent},
  {path:"best",component:BestSellerComponent},
  {path:"cart",component:AddCartComponent}
  ,{path:"**",component:CardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
