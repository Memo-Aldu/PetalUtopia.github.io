import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import flowerCards from "src/assets/flower-card/flowerCards.json"
import { IFlowerCard } from '../models/IFlowerCard';

@Injectable({
  providedIn: 'root'
})
export class FlowerFilerServiceService {
  protected jsonFlowerCards: IFlowerCard[] = flowerCards;
  protected cardMatrix: IFlowerCard[][] = [];
  private flowerCards = new BehaviorSubject<IFlowerCard[][]>(this.cardMatrix);

  constructor() { }

  getCards() {
    return this.flowerCards.asObservable();
  }


  public nextCardMatrix(col:number, row:number) {
    this.cardMatrix = [];
    let selectedFlowerIndex: number[] = [];
    for(let i = 0; i < row; i++) {
      this.cardMatrix[i] =[];
      for(let j = 0; j < col; j++) {
        let randomFlowerCardIndex = this.getRandomFlowerCardIndex();
        while(this.checkIfFlowerIsUsed(randomFlowerCardIndex, selectedFlowerIndex)) {
          randomFlowerCardIndex = this.getRandomFlowerCardIndex();
        }
        selectedFlowerIndex.push(randomFlowerCardIndex);
        this.cardMatrix[i][j] = (this.jsonFlowerCards[randomFlowerCardIndex]);
      }
    }
    this.flowerCards.next(this.cardMatrix);
  }

  public nextCardMatrixFiltered(col:number, filter:string) {
    let index = 0, row = 0;
    let isFiltered = false;
    this.cardMatrix = [];
    let filteredFlowers: IFlowerCard[] = this.getFilteredFlowerCards(filter);
    row = Math.ceil(filteredFlowers.length / col);
    for(let i = 0; i < row; i++) {
      if(!isFiltered ) {
        this.cardMatrix[i] =[];
        for(let j = 0; j < col; j++) {
          if(index === filteredFlowers.length) {
            isFiltered= true;
            break;
          }
          this.cardMatrix[i][j] = filteredFlowers[index];
          index++;
        }
      }
      else {
        break;
      }
    }
    this.flowerCards.next(this.cardMatrix);
  }

  private getRandomFlowerCardIndex(): number {
    return Math.floor(Math.random() * this.jsonFlowerCards.length);
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
    for(let flower of this.jsonFlowerCards) {
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

