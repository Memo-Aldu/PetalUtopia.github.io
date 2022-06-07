import { Component, OnInit, Input } from '@angular/core';
import { IFlowerCard } from 'src/app/models/IFlowerCard';

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.css']
})
export class FlowerCardComponent implements OnInit {

  @Input() flowerCard!: IFlowerCard;
  constructor() { }

  ngOnInit(): void {
    console.log(this.flowerCard.src);
  }

}
