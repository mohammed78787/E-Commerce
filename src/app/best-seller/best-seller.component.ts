import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { card } from '../models/card';
import { SharedDataService} from '../shared-data.service';


@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent {
  products:any=[];

  constructor(private http: HttpClient,private service:SharedDataService) { }

  ngOnInit():void {
    const url:string ='../assets/bestseller.json'
    this.http.get(url)
    .subscribe((data:any) => {
     this.products= data
   }
   );  }



    cartArr:any = [];


    addToCart(item:any) {
      this.cartArr.push(item)
      this.service.setCart(this.cartArr)
      console.log(this.cartArr)
      }




  // tempArr=this.cardArr;
  // cartArr:card[] = [];









//   deleteFromCart(item:card) {
//     var deleted = this.cartArr.findIndex((card)=> card.id == item.id);

//         this.cartArr.splice(deleted,1)

//     }
// }
  }
