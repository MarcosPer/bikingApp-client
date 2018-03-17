import { Routes } from '@angular/router';
import { GuardService } from './services/guard.service';

import { IndexComponent } from './pages/index/index.component';
import { OauthloginComponent } from './components/oauthlogin/oauthlogin.component';
import { ProfileComponent } from './pages/profile/profile.component';


export const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [GuardService] },
  { path: 'login/oauth', component: OauthloginComponent },

  { path: 'profile', component: ProfileComponent, canActivate: [GuardService] },

  { path: '**', redirectTo: '' },

];
