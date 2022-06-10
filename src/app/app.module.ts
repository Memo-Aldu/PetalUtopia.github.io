import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox'
import { FormsModule } from '@angular/forms';

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
import { AboutPageComponent } from './pages/about/about-page.component';
import { LocationCardComponent } from './component/location-card/location-card.component';
import { ModalComponent } from './component/modal/modal.component';
import { MessageModalComponent } from './component/message-modal/message-modal.component';
import { ShoppingCartIconComponent } from './component/shopping-cart-icon/shopping-cart-icon.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { AlertComponent } from './component/alert/alert.component';
import { CalenderComponent } from './component/calender/calender.component';
import { EventModalComponent } from './component/event-modal/event-modal.component';

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
    AboutPageComponent,
    LocationCardComponent,
    ModalComponent,
    MessageModalComponent,
    ShoppingCartIconComponent,
    CheckoutComponent,
    ProductCardComponent,
    AlertComponent,
    CalenderComponent,
    EventModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MdbCheckboxModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
