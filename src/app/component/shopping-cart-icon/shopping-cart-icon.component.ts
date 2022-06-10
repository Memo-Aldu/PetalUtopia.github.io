import { RouterModule } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-icon',
  template: `<span routerLink="/checkout" #content class="fa badge" style="font-size:24px" id="{{cartItems}}">&#xf07a;</span>`,
  styleUrls: ['./shopping-cart-icon.component.css']
})
export class ShoppingCartIconComponent implements OnInit {
  @ViewChild('content') content!: ElementRef;

  private cart: any[] = [];
  cartItems: number = 0;
  constructor(private cartService: CartService, private el: ElementRef) {
   }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(cart => this.cartItems = cart.length);
  }

}
