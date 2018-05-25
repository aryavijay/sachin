import { Component, OnInit } from '@angular/core';
import {createOutput} from '@angular/compiler/src/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  team:any;
  childName= [];
  item: any =['NCR', 'Pune', 'Bombay'];

  constructor() {
    this.team = { "members":[
      {
        name:"Vijay",
        location:"NCR",
        age:32
      },
      {
          name:"Sachin",
          location:"Pune",
        age:28
      },
      ]
    };
  }


  ngOnInit() {
  }

  updatedNameEvent(event){
    this.childName.push(event);
  }

}
