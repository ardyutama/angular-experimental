import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageModule } from './pages/welcome-page/welcome-page.module';
import { BottomMenuComponent } from './shared/bottom-menu/bottom-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
