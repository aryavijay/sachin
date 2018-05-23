import { Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {UserComponent} from './Components/user/user.component';


export const route: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'user', component: UserComponent}
]
