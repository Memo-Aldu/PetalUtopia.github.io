import { Component, OnInit, Input } from '@angular/core';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import {SharedService} from 'src/app/services/shared.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.css']
})
export class FlowerCardComponent implements OnInit {

  @Input() flowerCard!: IFlowerCard;
  constructor(private sharedFlower: SharedService, 
              private modalService: ModalService) {
   }

  ngOnInit(): void {
  }

  onClickMoreInfo() {
    this.sharedFlower.changeCard(this.flowerCard);
    this.modalService.open(this.flowerCard.src);
  }

}
