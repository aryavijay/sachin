import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ProfileComponent } from './Components/profile/profile.component';

import {route} from './app.routes';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { StateService } from './service/state.service';
import {GaurdService} from './service/gaurd.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
  ],
  providers: [
    StateService,
    GaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
