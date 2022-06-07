import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { FlowerAlbumComponent } from './component/flower-album/flower-album.component';
import { FlowerCardComponent } from './component/flower-card/flower-card.component';
import { DropdownBtnComponent } from './component/dropdown-btn/dropdown-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    HomePageComponent,
    CarouselComponent,
    FlowerAlbumComponent,
    FlowerCardComponent,
    DropdownBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
