import { Component, OnInit } from '@angular/core';
import {createOutput} from '@angular/compiler/src/core';
import {StateService} from '../../service/state.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpCallService} from '../../service/http-call.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[HttpCallService]
})
export class UserComponent implements OnInit {

  team:any;
  childName= [];
  item: any =['NCR', 'Pune', 'Bombay'];
  counter:number  = 0;

  constructor(private  state: StateService, private router:Router, private url : ActivatedRoute,
              private ser: HttpCallService) {

    // this.team = { "members":[
    //   {
    //     name:"Vijay",
    //     location:"NCR",
    //     age:32
    //   },
    //   {
    //       name:"Sachin",
    //       location:"Pune",
    //     age:28
    //   },
    //   ]
    // };
  }


  ngOnInit() {
    this.ser.getData().subscribe(data=>{
      this.team = data;
    });
  }

  updatedNameEvent(event) {
    this.childName.push(event);
  }

  updateState(){
    this.state.setUserData(this.team.members[0]);
    this.counter++;
    this.router.navigateByUrl("/")

    this.state.setprofile({"name":"abc", "loc": "xyz"});
  }
  updateState2(){
    this.state.setUserData(this.team.members[1]);
    this.state.setprofile({"name":"123124243", "loc": "98765"});
    this.router.navigateByUrl("/")
  }
}
