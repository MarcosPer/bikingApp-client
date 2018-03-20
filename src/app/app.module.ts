import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.router';

import { AuthService } from './services/auth.service';
import { CacheService } from './services/cache.service';
import { ApiService } from './services/api.service';

import { AuthInterceptor } from './services/auth.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';


import { LoggedGuard } from './guards/logged.guard';
import { UnloggedGuard } from './guards/unlogged.guard';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './template/landingpage/landingpage/landingpage.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './template/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { OauthloginComponent } from './components/oauthlogin/oauthlogin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingheaderComponent } from './template/landingpage/landingheader/landingheader.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutUsComponent } from './template/landingpage/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

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
    AboutUsComponent,
    HomeComponent,
    HomeProfileComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    LoggedGuard,
    UnloggedGuard,
    CacheService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
