import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ProfileComponent } from './Components/profile/profile.component';

import {route} from './app.routes';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { ChildComponent } from './components/child/child.component';
import { StateService } from './service/state.service';
import {GaurdService} from './service/gaurd.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    UserComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
  ],
  providers: [
    StateService,
    GaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
