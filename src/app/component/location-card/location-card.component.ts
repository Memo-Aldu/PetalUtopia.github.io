import { Component, OnInit, Input } from '@angular/core';
import { IStoreLocation } from 'src/app/models/IStoreLocation';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  @Input() location!: IStoreLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
