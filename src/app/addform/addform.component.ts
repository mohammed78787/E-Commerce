import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {

  id='';
  name='';
  src='';
  desc='';
  price='';
  available='';

  myform = new FormGroup({
    id:new FormControl(""),
    name:new FormControl(""),
    src:new FormControl(""),
    desc:new FormControl(""),
    price:new FormControl(""),
    available:new FormControl("")

  }
  )



  // addform:FormGroup;
  // constructor(private form:FormBuilder) {
  //   this.createAddForm();

  // }
  // createAddForm() {
  //   this.addform = this.form.group( {
  //     name:[''],
  //     id:[],
  //     src:[''],
  //     price:[''],
  //     available:[''],
  //     desc:['']


  //   });
  // }

  // submit() {

  //  console.log(` your form data ` ,this.addform.value)
  // }

}
