import { Component, OnInit } from '@angular/core';
import { IDocument } from 'src/app/models/IDocument';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import { IStoreLocation } from 'src/app/models/IStoreLocation';
import { FlowerFilerServiceService } from 'src/app/services/flower-filer-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  protected flowerCards!: IFlowerCard[][];

  protected locations: IStoreLocation[] = [
    {
      src: "assets/Location/location-1.jpg",
      address: "912 Bank St Ottawa, ON K5F 0D2",
      locationName: "Downtown Ottawa",
    },
    {
      src: "assets/Location/location-2.jpg",
      address: "912 Bank St Ottawa, ON K5F 0D2",
      locationName: "Kanata",
    }

  ];

  constructor(private flowerFilerServiceService: FlowerFilerServiceService) { }

  ngOnInit(): void {
  }

  applyFilter(filter: string) {
    this.flowerFilerServiceService.nextCardMatrixFiltered(3,filter);
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
 }

}
