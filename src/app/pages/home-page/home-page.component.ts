import { Component, OnInit } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';
import { IFlowerCard } from 'src/app/models/IFlowerCard';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  protected slides: IDocument[] = [
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

  protected flowerCards: IFlowerCard[][] = [
    [
      {
        src: "assets/flower-card/flower-card-1.jpg",
        title: "Pink Peonies",
        description: "hi.",
        price: "49.99"
      },
      {
        src: "assets/flower-card/flower-card-2.jpg",
        title: "Pink Peonies",
        description: "hi.",
        price: "49.99"
      },
      {
        src: "assets/flower-card/flower-card-3.jpg",
        title: "Pink Peonies",
        description: "hi.",
        price: "49.99"
      }
  ],
  [
    {
      src: "assets/flower-card/flower-card-4.jpg",
      title: "Pink Peonies",
      description: "hi.",
      price: "49.99"
    },
    {
      src: "assets/flower-card/flower-card-5.jpg",
      title: "Pink Peonies",
      description: "hi.",
      price: "49.99"
    },
    {
      src: "assets/flower-card/flower-card-6.jpg",
      title: "Pink Peonies",
      description: "hi.",
      price: "49.99"
    }
]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
