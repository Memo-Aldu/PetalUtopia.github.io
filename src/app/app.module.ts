import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './component/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    HomePageComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
