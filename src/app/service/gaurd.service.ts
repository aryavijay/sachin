import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class GaurdService implements CanActivate{

  constructor() { }

  canActivate() {

    //return false;
    return true;
  }

}
