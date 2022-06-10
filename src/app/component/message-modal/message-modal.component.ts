import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MessageModalComponent implements OnInit {

  @Input() message!: string;
  @Input() title!: string;

  @ViewChild("content", { static: true }) content!: ElementRef;
  constructor(config: NgbModalConfig, private ngbModalService: NgbModal, private modalService: ModalService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.modalService.nextMessageModal(this);
    
  }

  open() {
    this.ngbModalService.open(this.content);
  }
}
