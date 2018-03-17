import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';

import { AuthService } from './services/auth.service';
import { CacheService } from './services/cache.service';

import { LoggedGuard } from './guards/logged.guard';
import { UnloggedGuard } from './guards/unlogged.guard';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './template/landingpage/landingpage/landingpage.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './template/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { OauthloginComponent } from './components/oauthlogin/oauthlogin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingheaderComponent } from './template/landingpage/landingheader/landingheader.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutUsComponent } from './template/landingpage/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    OauthloginComponent,
    ProfileComponent,
    LandingheaderComponent,
    RegisterComponent,
    AboutUsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [AuthService, LoggedGuard, UnloggedGuard, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule {}
