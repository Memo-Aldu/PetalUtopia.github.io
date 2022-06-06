import { Component, OnInit, Input } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() slides!: IDocument[];
  currentIndexToShow:number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.slides);
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
