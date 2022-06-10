import { IProduct } from 'src/app/models/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  protected cart: IProduct[] = [];
  protected totalBeforeTax: number = 0;
  protected isCheckout: boolean = false;
  protected checkoutService: boolean = false;
  protected alertMessage = "Your shopping cart is empty";
  
  constructor(private cartService:CartService,  private modalService: ModalService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(cart => this.cart = cart);
    this.totalBeforeTax = this.cartService.getTotalPrice();
  }

  updateCart(product: IProduct) {
    this.totalBeforeTax = this.cartService.getTotalPrice();
  }

  onClear() {
    this.cartService.removeAll();
    this.isCheckout = false;
  }

  onCheckout() {
    if (this.cart.length > 0) {
      this.isCheckout = true;
    }
  }
  
  onPayment() {
    this.cartService.removeAll();
    this.totalBeforeTax = 0;
    this.isCheckout = false;
    this.checkoutService = false;
    this.modalService.openMessageModal();
  }

  onClickOpenAccordion() {
    if(!this.checkoutService) {
      this.checkoutService = true;
    }else{
      this.checkoutService = false;
    }
  }

}
