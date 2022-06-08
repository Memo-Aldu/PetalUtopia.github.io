import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { FlowerAlbumComponent } from './component/flower-album/flower-album.component';
import { FlowerCardComponent } from './component/flower-card/flower-card.component';
import { DropdownBtnComponent } from './component/dropdown-btn/dropdown-btn.component';
import { StarRatingsComponent } from './component/star-ratings/star-ratings.component';
import { PageFooterComponent } from './component/page-footer/page-footer.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ServiceCardsComponent } from './component/service-cards/service-cards.component';

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
    StarRatingsComponent,
    PageFooterComponent,
    ServicePageComponent,
    ServiceCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MdbCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
