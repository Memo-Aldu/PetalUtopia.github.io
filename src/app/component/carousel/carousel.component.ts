import { Component, OnInit, Input } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() slides!: IDocument[];
  currentIndexToShow:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  nextImg() {
    if(this.currentIndexToShow < this.slides.length - 1) {
      this.currentIndexToShow++;
    }else {
      this.currentIndexToShow = 0;
    }
  }

  prevImg() {
    if(this.currentIndexToShow > 0) {
      this.currentIndexToShow--;
    }else {
      this.currentIndexToShow = this.slides.length - 1;
    }
  }
}
