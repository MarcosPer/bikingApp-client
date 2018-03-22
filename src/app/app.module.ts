import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { SettingsComponent } from './pages/settings/settings/settings.component';
import { ProfileSettingsComponent } from './pages/settings/profile-settings/profile-settings.component';
import { AccountSettingsComponent } from './pages/settings/account-settings/account-settings.component';
import { UserService } from './services/user.service';

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
    ErrorpageComponent,
    SettingsComponent,
    ProfileSettingsComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    LoggedGuard,
    UnloggedGuard,
    CacheService,
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
