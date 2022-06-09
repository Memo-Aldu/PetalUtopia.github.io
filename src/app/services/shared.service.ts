import { IFlowerCard } from '../models/IFlowerCard';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private defaultCard: IFlowerCard = {
    src: "assets/flower-card/flower-card-1.jpg",
    title: "Pink Peonies",
    description: "Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque auguesodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec.",
    price: "49.99",
    rating: {
      "rating": 5,
      "reviews": 18
    },
    occasion: ["birthday","get well", "thank you"],
    flowerType:"white rose"
  }

  private flowerCards = new BehaviorSubject<IFlowerCard>(this.defaultCard);
  currentCard = this.flowerCards.asObservable();

  constructor() { }

  changeCard(card: IFlowerCard) {
    this.flowerCards.next(card);
  }
}
