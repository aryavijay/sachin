import { Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {UserComponent} from './Components/user/user.component';
import {ProfileComponent} from './Components/profile/profile.component';
import {GaurdService} from './service/gaurd.service';


export const route: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user', component: UserComponent, canActivate:[GaurdService]},
  {path:'profile', component:ProfileComponent}
]
