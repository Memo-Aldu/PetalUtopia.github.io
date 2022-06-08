import { Component, OnInit, Input } from '@angular/core';
import { IStarRating } from 'src/app/models/IStarRating';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.css']
})
export class StarRatingsComponent implements OnInit {

  @Input() starRatings?: IStarRating;
  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    let startArray: string[] = [];
    if( i % 1 == 0) {
      for(let j = 0; j < i; j++) {
        startArray.push("bi bi-star-fill");
      }
    }
    else {
      for(let j = 0; j < i-1; j++) {
        startArray.push("bi bi-star-fill");
      }
      startArray.push("bi bi-star-half");
    }
    let arrayLength = startArray.length;
    if(arrayLength < 5) {
      for(let j = 0; j < 5 - arrayLength; j++) {
        startArray.push("bi bi-star");
      }
    }
    console.log(startArray);
    return startArray;
}

}
