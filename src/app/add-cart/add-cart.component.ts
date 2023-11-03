import { Component } from '@angular/core';
import { SharedDataService} from '../shared-data.service';
import { card} from '../models/card';



@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent {
card1:card[]=[];
  constructor(private service:SharedDataService) {
 this.card1= this.service.getCart()
  }
  deleteFromCart(item:card) {
    var deleted = this.card1.findIndex((card)=> card.id == item.id);

        this.card1.splice(deleted,1)

    }
}
