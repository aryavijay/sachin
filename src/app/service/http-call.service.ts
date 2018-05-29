import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpCallService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("//localhost/data.json");

    //return this.http.post("//localhost/data.json", {"formData":formdata});
  }

}
