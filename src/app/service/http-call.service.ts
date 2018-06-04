import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpCallService {

  constructor(private http:HttpClient) { }

  getData(){
      let headerVar = new HttpHeaders();
      headerVar = headerVar.append("test","sachin");

      let headers = new HttpHeaders({"AuthName":"dell"});

    return this.http.get("//localhost/data.json" , {headers} );
  }

}

