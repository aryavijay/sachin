import {Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {UserComponent} from './Components/user/user.component';
import {ProfileComponent} from './Components/profile/profile.component';
import {GaurdService} from './service/gaurd.service';


export const route: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'user', component: UserComponent, canActivate: [GaurdService], children: [
      {path: 'view/:id', component: ProfileComponent},
      {path: 'manage/:id', component: ProfileComponent}
    ]
  },
  {path:'user/edit/:id', component:ProfileComponent},
  {path:'**', redirectTo:'home'}
];
