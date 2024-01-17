import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageModule } from './pages/welcome-page/welcome-page.module';
import { SeparatorComponent } from './shared/separator/separator.component';
import { BottomMenuComponent } from './shared/bottom-menu/bottom-menu.component';
import { MandatoryComplianceComponent } from './shared/mandatory-compliance/mandatory-compliance.component';
import { WidgetLayoutComponent } from './shared/widget-layout/widget-layout.component';
import { CompetencyImageComponent } from './shared/competency-image/competency-image.component';
import { StatsComponent } from './shared/stats/stats.component';
import { LabelComponent } from './shared/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent,
    WidgetLayoutComponent,
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
