import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class HttpInterceptorService implements  HttpInterceptor{

  constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let attachheaders = false;

      if(attachheaders){
          req    = req.clone( {headers: req.headers.append('author', 'abjcsjabsdjhcsjdkvglj')});
          return next.handle(req);
      }else{
          return next.handle(req);
      }

    }

}
