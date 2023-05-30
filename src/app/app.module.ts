import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { enableAkitaProdMode } from '@datorama/akita';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  loadCoreIconSet,
  loadCommerceIconSet,
  loadChartIconSet,
  loadEssentialIconSet,
  loadMediaIconSet,
  loadMiniIconSet,
  loadTechnologyIconSet,
  loadSocialIconSet,
  loadTextEditIconSet,
  loadTravelIconSet,
} from '@cds/core/icon';
import { LayoutComponent } from './layout/layout.component';

{
  // Icons
  loadCoreIconSet();
  loadCommerceIconSet();
  loadChartIconSet();
  loadEssentialIconSet();
  loadMediaIconSet();
  loadMiniIconSet();
  loadTechnologyIconSet();
  loadSocialIconSet();
  loadTextEditIconSet();
  loadTravelIconSet();
}

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
