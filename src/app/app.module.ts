import { APP_INITIALIZER, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { initializeApp } from '../bootstrap/init';

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

import { HomeComponent } from './pages/home/home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { VerticalComponent } from './components/nav/vertical/vertical.component';

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
  declarations: [
    AppComponent,
    HomeComponent,
    VerticalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
