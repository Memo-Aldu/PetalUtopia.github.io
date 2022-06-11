import { Component, OnInit, Input } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() slides!: IDocument[];
  private subscription!: Subscription;
  currentIndexToShow:number = 0;
  
  constructor() {
   }


   ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    const source = interval(8000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(() => this.nextImg());

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
