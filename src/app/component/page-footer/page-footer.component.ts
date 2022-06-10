import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"
import { ModalService } from 'src/app/services/modal.service';



@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})
export class PageFooterComponent implements OnInit {
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    AOS.init();
  }

  onSubscribe() {
    this.modalService.openMessageModal();
  }

}
