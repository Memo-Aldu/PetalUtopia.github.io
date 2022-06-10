import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

export interface IServiceOffered {
  serviceName: string;
  serviceMessage: string;
  serviceDescription?: string
}

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.css']
})
export class ServiceCardsComponent implements OnInit {

  protected eventServices: IServiceOffered = {
    serviceName: "Event Planning",
    serviceMessage: "Please let use know what type of event are you hosting and we will be happy to help you plan it.",
    serviceDescription:"Our full-planning service handles the entire scope of your event, including all design, production management, and logistics. From the minute details to the major decisions, our team of experienced planners will ensure your event goes according to plan with full and transparent communication. From the very first meeting, we’ll turn your ideas into a vision board to develop a creative concept you’ll love."
  }; 
  protected customBouquetServices: IServiceOffered = {
    serviceName: "Custom Bouquet",
    serviceMessage: "Please let us know what type of flower bouquet you would like and we will be happy to help you create it.",
    serviceDescription:"At Petal Utopia, we allow you to be the designer, we will work with you one-on-one to create the perfect flower bouquet."
  };

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  
  onServiceSelected(event:any) {
    if(event == this.eventServices.serviceName) {
    this.modalService.openEventModal(this.eventServices);
  }
  else if(event == this.customBouquetServices.serviceName) {
    this.modalService.openEventModal(this.customBouquetServices);
  }
  else {
    console.log(event);
  }
}



}
