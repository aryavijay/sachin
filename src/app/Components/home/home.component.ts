import {Component, OnInit, ViewChild} from '@angular/core';
import {StateService} from '../../service/state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    titleText = "How are You";
    friends:any[] = ['sachin','nitesh','vijay', 'alankar'];
    searchName: string =''

  constructor(private state: StateService, private router:Router) { }

  ngOnInit() {


    let stateData  = this.state.getUserState();
    console.log(stateData.value);

    console.log(this.state.getData());
  }


  navigateToUser(){
    this.router.navigateByUrl("/user");
  }


    updateSearch(event){
      this.searchName = event.target.value;
}
}
