import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/services/shared.service';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import { IStarRating } from 'src/app/models/IStarRating';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild("content", { static: true }) content!: ElementRef;
  @Input() _id!: string;
  private element: any;

  flowerCard!: IFlowerCard;
  protected starRating: IStarRating = {
    rating: 4.5,
    reviews: 10,
  }
  constructor(private sharedFlower: SharedService,
              private modalService: ModalService,
              private ngbModelService: NgbModal,
              private el: ElementRef,
              config: NgbModalConfig ) {
    // customize default values of modals used by this component tree
    this.element = el.nativeElement;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.sharedFlower.currentCard.subscribe(flowerCard => this.flowerCard = flowerCard);
    let modal = this;

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
    this.element.remove();
}

  ngAfterViewInit() {
    console.log(this.content.nativeElement.value);
  }


  open(): void {
    this.ngbModelService.open(this.content, {size: "xl"})
  }


}
