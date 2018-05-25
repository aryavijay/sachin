import { Component, OnInit } from '@angular/core';
import {createOutput} from '@angular/compiler/src/core';
import {StateService} from '../../service/state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  team:any;
  childName= [];
  item: any =['NCR', 'Pune', 'Bombay'];
  counter:number  = 0;

  constructor(private  state: StateService, private router:Router) {
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

  updatedNameEvent(event) {
    this.childName.push(event);
  }

  updateState(){
    this.state.setUserData(this.team.members[0]);
    this.counter++;
    this.router.navigateByUrl("/")
  }
  updateState2(){
    this.state.setUserData(this.team.members[1]);
    this.router.navigateByUrl("/")
  }
}
