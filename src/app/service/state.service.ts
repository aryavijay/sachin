import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StateService {

  private userObject = new BehaviorSubject<object>({});

  constructor() { }


  setUserData( data:object){
    this.userObject.next(data);
  }

  getUserState(){
    return this.userObject;
  }
}
