import { Component, ElementRef, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/modal.service';
import { IServiceOffered } from '../service-cards/service-cards.component';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EventModalComponent implements OnInit {
  protected IsBookedService: boolean = false;

  @Input() service!: IServiceOffered;
  @Output() onBookingClicked = new EventEmitter<string>();


  @ViewChild("content", { static: true }) content!: ElementRef;
  constructor(config: NgbModalConfig, private ngbModalService: NgbModal, private modalService: ModalService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.modalService.nextEventModal(this);
    
  }

  open(service: IServiceOffered) {
    this.IsBookedService = false;
    this.service = service
    this.ngbModalService.open(this.content, {size: "xl"});
  }

  onBooking() {
    this.onBookingClicked.emit(this.service.serviceName);
    this.IsBookedService = true;
  }
}
