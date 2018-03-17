import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './template/landingpage/landingpage/landingpage.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './template/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { OauthloginComponent } from './components/oauthlogin/oauthlogin.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AuthService } from './services/auth.service';
import { GuardService } from './services/guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    OauthloginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
