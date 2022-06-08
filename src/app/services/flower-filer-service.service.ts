import { Injectable } from '@angular/core';
import flowerCards from "src/assets/flower-card/flowerCards.json"
import { IFlowerCard } from '../models/IFlowerCard';

@Injectable({
  providedIn: 'root'
})
export class FlowerFilerServiceService {
  protected flowerCards: IFlowerCard[] = flowerCards;
  constructor() { }

  public getCardMatrix(col:number, row:number): IFlowerCard[][] {
    let cardMatrix: IFlowerCard[][] = [];
    let selectedFlowerIndex: number[] = [];
    for(let i = 0; i < row; i++) {
      cardMatrix[i] =[];
      for(let j = 0; j < col; j++) {
        let randomFlowerCardIndex = this.getRandomFlowerCardIndex();
        while(this.checkIfFlowerIsUsed(randomFlowerCardIndex, selectedFlowerIndex)) {
          randomFlowerCardIndex = this.getRandomFlowerCardIndex();
        }
        selectedFlowerIndex.push(randomFlowerCardIndex);
        cardMatrix[i][j] = (this.flowerCards[randomFlowerCardIndex]);
      }
    }
    return cardMatrix;
  }

  public getFlowerCardsFiltered(col:number, filter:string): IFlowerCard[][] {
    let cardMatrix: IFlowerCard[][] = [];
    let index = 0, row = 0;
    let filteredFlowers: IFlowerCard[] = this.getFilteredFlowerCards(filter);
    row = Math.ceil(filteredFlowers.length / col);
    for(let i = 0; i < row; i++) {
      cardMatrix[i] =[];
      for(let j = 0; j < col; j++) {
        if(index === filteredFlowers.length) {
          return cardMatrix;
        }
        cardMatrix[i][j] = filteredFlowers[index];
        index++;
      }
    }
    return cardMatrix;
  }

  private getRandomFlowerCardIndex(): number {
    return Math.floor(Math.random() * this.flowerCards.length);
  }

  private checkFilter(flower:IFlowerCard, filter:string): boolean {
    if(flower.flowerType.toLowerCase().includes(filter.toLowerCase())) {
      return true;
    }
    for(let occasion of flower.occasion) {
      if(occasion.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  private getFilteredFlowerCards(filter: string): IFlowerCard[] {
    let filteredFlowers: IFlowerCard[] = [];
    for(let flower of this.flowerCards) {
      if(this.checkFilter(flower, filter)) {
        filteredFlowers.push(flower);
      }
    }
    return filteredFlowers;
  }

  private checkIfFlowerIsUsed(generatedIndex:number , selectedFlowerIndex: number[]): boolean {
    for(let element of selectedFlowerIndex) {
      if(generatedIndex === element) {
        return true;
      }
    }
    return false;
  }
}

