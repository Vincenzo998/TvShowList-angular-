// Built-in Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { LatestTvShowListComponent } from './components/home-list/latest-tv-show-list/latest-tv-show-list.component';
import { MostRatedTvShowComponent } from './components/home-list/most-rated-tv-show/most-rated-tv-show.component';
import { PopularTvShowListComponent } from './components/home-list/popular-tv-show-list/popular-tv-show-list.component';
import { TvAiringTodayListComponent } from './components/home-list/tv-airing-today-list/tv-airing-today-list.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { DetailListComponent } from './components/home-list/detail-list/detail-list.component';
import { AppComponent } from './app.component';

// Modules
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routing';

// Services
import { RequestHttpService } from './services/request-http/request-http.service';

@NgModule({
  declarations: [
    AppComponent,
    LatestTvShowListComponent,
    MostRatedTvShowComponent,
    PopularTvShowListComponent,
    TvAiringTodayListComponent,
    HomeListComponent,
    DetailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [RequestHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
