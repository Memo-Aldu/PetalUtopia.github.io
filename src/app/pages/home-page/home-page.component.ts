import { Component, OnInit } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  protected slides: IDocument[] = [
    {
      src: "assets/homeCarousel/flowers-bouque.jpg",
      title: "Pink Peonies",
      description: "hi."
    },
    {
      src: "assets/homeCarousel/rustic.jpg",
      title: "Colorful Flowers",
      description: "hi2."
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
