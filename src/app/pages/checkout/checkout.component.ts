import { IProduct } from 'src/app/models/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  protected cart: IProduct[] = [];
  protected totalBeforeTax: number = 0;
  protected alertMessage = "Your shopping cart is empty";
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(cart => this.cart = cart);
    this.totalBeforeTax = this.cartService.getTotalPrice();
  }

  updateCart(product: IProduct) {
    this.totalBeforeTax = this.cartService.getTotalPrice();
  }

  onClear() {
    this.cartService.removeAll();
  }

}
