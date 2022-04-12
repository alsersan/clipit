import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NavComponent, HeroComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
