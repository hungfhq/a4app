import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  // address: {
  //   street:string,
  //   city:string,
  //   state:string
  // }
  address: Address;
  hobbies: string[];
  hello:any;

  constructor() { 
  console.log('constructor ran...');
  }

  ngOnInit() {
  
  console.log('ngOnInit ran...');
  this.name = 'John Doe';
  this.age = 30;
  this.address = {
    street: '50 main st',
    city: 'boston',
    state: 'MA'
  }
  this.hobbies=['watch movies', 'music'];
  }

  onClick(){
    this.name='Brad Traversy II';
    this.hobbies.push('new hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}
