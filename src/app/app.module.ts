import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MediaSearchComponent} from './media-search/media-search.component';
import {MediaResultsComponent} from './media-results/media-results.component';
import {MediaDetailsComponent} from './media-details/media-details.component';
import {PaginatorModule} from "primeng/paginator";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiGatewayInterceptor} from "./shared/interceptors/api-gateway-interceptor";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MessageService} from "primeng/api";
import {CacheRouteReuseStrategy} from "./shared/stategies/route-reuse-strategy";
import {RouteReuseStrategy} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MediaSearchComponent,
    MediaResultsComponent,
    MediaDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    PaginatorModule,
    ToggleButtonModule,
    ProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiGatewayInterceptor,
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
