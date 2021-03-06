import { Routes } from '@angular/router';
import { LoggedGuard } from './guards/logged.guard';
import { UnloggedGuard } from './guards/unlogged.guard';

import { IndexComponent } from './components/index/index.component';
import { OauthloginComponent } from './components/oauthlogin/oauthlogin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutUsComponent } from './template/landingpage/about-us/about-us.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';


export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent},
  { path: 'error', component: ErrorpageComponent},

  // Ulogged paths
  { path: 'login', component: LoginComponent, canActivate: [UnloggedGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [UnloggedGuard]},
  { path: 'login/oauth', component: OauthloginComponent, canActivate: [UnloggedGuard] },
  { path: 'about', component: AboutUsComponent, canActivate: [UnloggedGuard] },

  // Logged paths
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [LoggedGuard] },
  { path: 'settings/:page', component: SettingsComponent, canActivate: [LoggedGuard]},

  // { path: 'settings/account', component: SettingsComponent, data: {subpage : 'account'}, canActivate: [LoggedGuard]},

  // 404 Error
  { path: '**', redirectTo: '' },

];
