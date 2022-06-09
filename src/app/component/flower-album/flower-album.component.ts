import { Component, OnInit, Input} from '@angular/core';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-flower-album',
  templateUrl: './flower-album.component.html',
  styleUrls: ['./flower-album.component.css']
})
export class FlowerAlbumComponent implements OnInit {

  protected selectedFlowerCard!: IFlowerCard;
  @Input() flowerCards!: IFlowerCard[][];

  constructor() { }

  ngOnInit(): void {
  }


}
