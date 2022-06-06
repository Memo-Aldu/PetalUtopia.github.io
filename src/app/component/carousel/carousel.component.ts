import { Component, OnInit, Input } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() slides!: IDocument[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.slides);
  }

  nextImg() {

  }

}
