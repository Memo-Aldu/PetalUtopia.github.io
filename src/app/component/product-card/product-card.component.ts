import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  protected quantity!: number;
  @Input() product!: IProduct;
  @Output() productUpdateEvent = new EventEmitter<IProduct>();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.quantity = this.product.quantity;

  }

  update(): void {
    if(this.quantity <= 0) {
      this.cartService.removeProduct(this.product);
    } 
    else {
      this.product.quantity = this.quantity;
      this.cartService.updateProduct(this.product);
    }
    this.productUpdateEvent.emit(this.product);
  }

  onClickDelete() {
    this.cartService.removeProduct(this.product);
    this.productUpdateEvent.emit(this.product);
  }

}
