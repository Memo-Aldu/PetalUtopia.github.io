import { Component, OnInit } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import { FlowerFilerServiceService } from 'src/app/services/flower-filer-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  protected flowerCards!: IFlowerCard[][];
  protected slides: IDocument[] = [
    {
      src: "assets/homeCarousel/slide-4.jpg",
      title: "Pink Peonies",
      description: "hi."
    },
    {
      src: "assets/homeCarousel/slide-1.jpg",
      title: "Pink Peonies",
      description: "hi."
    },
    {
      src: "assets/homeCarousel/slide-2.jpg",
      title: "Colorful Flowers",
      description: "hi2."
    },
    {
      src: "assets/homeCarousel/slide-3.jpg",
      title: "Colorful Flowers",
      description: "hi2."
    }
  ];
  constructor(private flowerFilerServiceService: FlowerFilerServiceService) { }

  ngOnInit(): void {
    this.flowerFilerServiceService.getCards().subscribe(flowerCards => this.flowerCards = flowerCards);
    if(this.flowerCards.length === 0) {
      this.flowerFilerServiceService.nextCardMatrix(3,2);
    }
  }

  applyFilter(filter: string) {
    this.flowerFilerServiceService.nextCardMatrixFiltered(3,filter);
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
 }

}
