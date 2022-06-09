import { Injectable } from '@angular/core';
import { ModalComponent } from '../component/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: ModalComponent[] = [];

     next(modal: ModalComponent) {
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x._id !== id);
    }

    open(id: string) {
        let modal: any = this.modals.filter(x => x._id === id)[0];
        modal.open();
    }

    close(id: string) {
        let modal: any = this.modals.filter(x => x._id === id)[0];
        modal.close();
    }

}
