import { RouterModule } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-icon',
  template: `<em routerLink="/checkout" id="cart-icon" #content class="fa badge" style="font-size:24px" id="{{cart.length}}">&#xf07a;</em>`,
  styleUrls: ['./shopping-cart-icon.component.css']
})
export class ShoppingCartIconComponent implements OnInit {
  @ViewChild('content') content!: ElementRef;

  protected cart: any[] = [];
  cartItems: number = 0;
  constructor(private cartService: CartService, private el: ElementRef) {
   }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(cart => this.cart = cart);
  }

}
