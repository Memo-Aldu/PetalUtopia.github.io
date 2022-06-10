import { IProduct } from './../models/IProduct';
import { IFlowerCard } from './../models/IFlowerCard';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: IProduct[] = [];
  private cartSubject = new BehaviorSubject<IProduct[]>(this.cart);

  constructor() { }

  getProducts() {
    return this.cartSubject.asObservable();
  }

  setProducts(products: IProduct[]) {
    this.cart = products;
    this.cartSubject.next(this.cart);
  }

  updateProduct(product: IProduct) {
    this.cart.forEach(p => {
      if(p.item === product.item) {
        p.quantity = product.quantity;
        p.price = (Math.round((p.quantity * p.item.price) * 100) / 100);
      }
    });
  }

  addProduct(product: IProduct) {
    let existingProduct = false;
    this.cart.forEach(p => {
      if(p.item === product.item) {
          p.quantity += product.quantity;
          p.price = (Math.round((p.quantity * p.item.price) * 100) / 100);
          existingProduct = true;
      }
    });
    if(!existingProduct) {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
    }
  }

  removeProduct(product: IProduct) {
    this.cart = this.cart.filter(item => item.item.src !== product.item.src);
    this.cartSubject.next(this.cart);
  }

  removeAll() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

  getTotalPrice() {
    let total =  this.cart.reduce((acc, cur) => acc + cur.price, 0);
    return (Math.round(total * 100) / 100);
  }


}
