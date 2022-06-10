import { Component, OnInit } from '@angular/core';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import { FlowerFilerServiceService } from 'src/app/services/flower-filer-service.service';
import { ModalService } from 'src/app/services/modal.service';



@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  protected flowerCards!: IFlowerCard[][];
  constructor(private flowerFilerServiceService: FlowerFilerServiceService) { }

  ngOnInit(): void {
    this.flowerCards = this.flowerFilerServiceService.getCardMatrix(3, 2);
  }

  applyFilter(filter: string) {
    this.flowerCards = this.flowerFilerServiceService.getFlowerCardsFiltered(3,filter);
  }

  onServiceBooked(event:any) {
    console.log(event);
  }

}
