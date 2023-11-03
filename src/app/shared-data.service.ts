import { Injectable } from '@angular/core';
import {card} from 'src/app/models/card'

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
private cartArray:card[]=[];

  constructor() { }

  setCart(card:card[]) {
    this.cartArray=card
  }
  getCart() {
    return this.cartArray;
  }
}


