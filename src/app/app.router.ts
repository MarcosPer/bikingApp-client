import { Routes } from '@angular/router';
import { LoggedGuard } from './guards/logged.guard';
import { UnloggedGuard } from './guards/unlogged.guard';

import { IndexComponent } from './pages/index/index.component';
import { OauthloginComponent } from './components/oauthlogin/oauthlogin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent},
  { path: 'login', component: LoginComponent, canActivate: [UnloggedGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [UnloggedGuard]},

  { path: 'login/oauth', component: OauthloginComponent, canActivate: [UnloggedGuard] },

  { path: 'profile', component: ProfileComponent, canActivate: [LoggedGuard] },

  { path: '**', redirectTo: '' },

];
