import { Injectable } from '@angular/core';
import { EventModalComponent } from '../component/event-modal/event-modal.component';
import { MessageModalComponent } from '../component/message-modal/message-modal.component';
import { ModalComponent } from '../component/modal/modal.component';
import { IServiceOffered } from '../component/service-cards/service-cards.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: ModalComponent[] = [];
  private messageModal!: MessageModalComponent;
  private eventModal!: EventModalComponent;

  

     next(modal: ModalComponent) {
        this.modals.push(modal);
    }

    nextMessageModal(messageModal: MessageModalComponent) {
        this.messageModal = messageModal;
    }

    nextEventModal(eventModal: EventModalComponent) {
        this.eventModal = eventModal;
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x._id !== id);
    }

    open(id: string) {
        let modal: any = this.modals.filter(x => x._id === id)[0];
        modal.open();
    }

    openMessageModal(title:string, message:string) {
        this.messageModal.open(title, message);
    }

    openEventModal(service: IServiceOffered) {
        this.eventModal.open(service);
    }

    close(id: string) {
        let modal: any = this.modals.filter(x => x._id === id)[0];
        modal.close();
    }

}
