import { Component, OnInit, Input } from '@angular/core';
import { IFlowerCard } from 'src/app/models/IFlowerCard';

@Component({
  selector: 'app-flower-album',
  templateUrl: './flower-album.component.html',
  styleUrls: ['./flower-album.component.css']
})
export class FlowerAlbumComponent implements OnInit {

  @Input() flowerCards!: IFlowerCard[][];

  constructor() { }

  ngOnInit(): void {
    console.log(this.flowerCards);
  }

}
