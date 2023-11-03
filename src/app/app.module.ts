import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AddformComponent } from './addform/addform.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    AddformComponent,
    BestSellerComponent,
    AddCartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
