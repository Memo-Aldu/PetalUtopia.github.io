import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/services/shared.service';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import { IStarRating } from 'src/app/models/IStarRating';
import { IProduct } from 'src/app/models/IProduct';
import { ModalService } from 'src/app/services/modal.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild("content", { static: true }) content!: ElementRef;
  @Input() _id!: string;
 quantity: number = 1;

 cart: IProduct[] = [];

  flowerCard!: IFlowerCard;
  constructor(private sharedFlower: SharedService,
              private modalService: ModalService,
              private cartService: CartService,
              private ngbModelService: NgbModal,
              private el: ElementRef,
              config: NgbModalConfig ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.sharedFlower.currentCard.subscribe(flowerCard => this.flowerCard = flowerCard);
    this.cartService.getProducts().subscribe(cart => this.cart = cart);
    let modal = this;
    console.log(this.quantity);

    // ensure id attribute exists
    if (!this._id) {
        console.error('modal must have an id');
        return;
    }
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.next(this);
    console.log(this.flowerCard);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this._id);
}

  ngAfterViewInit() {
  }

  open(): void {
    this.ngbModelService.open(this.content, {size: "xl"})
  }

  onClickAddToCart() {
    this.quantity = Math.floor(this.quantity);
    if(this.quantity > 0) {
      let price = Math.round((this.flowerCard.price * this.quantity) * 100) / 100;
      let product: IProduct = {
        item: this.flowerCard,
        quantity: +this.quantity,
        price: price
    };
      this.cartService.addProduct(product);

    }
}


}
