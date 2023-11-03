import { Component } from '@angular/core';
import { card} from '../models/card';
import { SharedDataService} from '../shared-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {




  cardArr = [{id:1,images:"../assets/imgs/41IdQndih9L._AC_UL400_.jpg", title:'smart watch', description:`Smart watch for women CardoO Watch touch screen Heart Rate waterproof smart
  watch Egypt Bluetooth Calls Smartwatch Support Arabic for Android and IOS`,price:300, available :5
},{id:2,images:"../assets/imgs/71JFrLNEM6L._AC_UL400_.jpg", title:'smart watch', description:`Smart watch Egypt touch screen CardoO watch for men Heart Rate waterproof Bluetooth Calls Smart watch Support Arabic for Android and IOS`,price:500, available :0
},{id:3,images:"../assets/imgs/61uqYymKwyL._AC_UL400_.jpg", title:'Timex', description:`Timex Mens Chronograph Quartz Watch with Leather Strap`,price:6000, available :3
},{id:4,images:"../assets/imgs/81sU7WIIe8L._AC_UL400_.jpg", title:'Timex', description:`Men's Classics 43mm Watch`,price:7000, available :3
},{id:5,images:"../assets/imgs/714PuqPt5rL._AC_UL400_.jpg", title:'Timex', description:`Men's Analogue Classic Quartz Watch with Two-toned Bracelet`,price:4000, available :3
},{id:6,images:"../assets/imgs/716gQtVG+rL._AC_UL400_.jpg", title:'Timex', description:`Men's Southview Multifunction 41 mm Leather Strap Watch`,price:5000, available :3
}];

tempArr:card[]=this.cardArr;
cartArr:card[] = [];

searchName = "";
searchByPrice = "";



search() {
let searchedElement = this.cardArr.filter((ele)=> {
  return ele.title.toLocaleLowerCase().includes(this.searchName.toLocaleLowerCase())
})

this.tempArr = searchedElement
}
searchPrice() {
  let searchedElement = this.cardArr.filter((ele)=> {
    return ele.price==parseInt(this.searchByPrice)


  })

  this.tempArr = searchedElement
  }

reset() {
this.tempArr = this.cardArr
}




addToCart(item:any) {
this.cartArr.push(item)
this.service.setCart(this.cartArr)
console.log(this.cartArr)
}

deleteFromCart(item:card) {
  var deleted = this.cartArr.findIndex((card)=> card.id == item.id);

      this.cartArr.splice(deleted,1)

  }
  // form template driven
  // id:any;
  // name:string='';
  // src='';
  // desc:string='';
  // price:any;
  // available:any;

  // onsubmit() {
  //   var item={
  //     id:this.id,
  //     image :this.src,
  //     title :this.name,
  //     description :this.desc,
  //     price :this.price,
  //     available :this.available
  //   }

  //   this.tempArr.push(item)

  // }


  // form reactive
  // id='';
  // name='';
  // src='';
  // desc='';
  // price='';
  // available='';

  // myform = new FormGroup({
  //   id:new FormControl(),
  //   name:new FormControl(),
  //   src:new FormControl(),
  //   desc:new FormControl(),
  //   price:new FormControl(),
  //   available:new FormControl()

  // }
  // )
  // obj:card={
  //   id:this.myform.controls.id.value,
  //   image :this.myform.controls.src.value,
  //   title :this.myform.controls.name.value,
  //   description :this.myform.controls.desc.value,
  //   price :this.myform.controls.price.value,
  //   available :this.myform.controls.available.value

  // }

  // onsubmit() {
  //   this.obj={
  //     id:this.myform.controls.id.value,
  //     image :this.myform.controls.src.value,
  //     title :this.myform.controls.name.value,
  //     description :this.myform.controls.desc.value,
  //     price :this.myform.controls.price.value,
  //     available :this.myform.controls.available.value
  //   }

  //   this.cardArr.push(this.obj)
  // }
      // form reactive second way
      myform:FormGroup
      constructor(private service:SharedDataService ,private FormBuilder:FormBuilder) {
        this.myform = this.FormBuilder.group( {
          id:[''],
          title:[''],
          description:[''],
          price:[''],
          available:[''],
          image:['']
        })

      }
      onsubmit() {
       this.tempArr.push(this.myform.value)
      }




}

