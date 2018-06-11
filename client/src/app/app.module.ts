import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './components/login/login.module'
import { RegisterModule } from './components/register/register.module'
import { TapgameModule } from './components/tapgame/tapgame.module'

import { AuthService } from './services/auth/auth.service'
import { AuthGuardService } from './services/auth-guard/auth-guard.service'
import { JwtHelper } from 'angular2-jwt'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { Routing } from './app.routing';
import { GameComponent } from './components/game/game.component';
import { ScoresComponent } from './components/scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GameComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule,
    BrowserAnimationsModule,
      Routing,
      LoginModule,
      RegisterModule,
      TapgameModule
  ],
  providers: [
      AuthService,
      AuthGuardService,
      JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
