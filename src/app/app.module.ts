import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {ProfileComponent} from './Components/profile/profile.component';

import {route} from './app.routes';
import {HomeComponent} from './Components/home/home.component';
import {UserComponent} from './Components/user/user.component';
import {StateService} from './service/state.service';
import {GaurdService} from './service/gaurd.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from "./service/http-interceptor.service";
import {AppendPipe} from './pipes/append.pipe';


@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        HomeComponent,
        UserComponent,
        AppendPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(route),
    ],
    providers: [
        StateService,
        GaurdService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
