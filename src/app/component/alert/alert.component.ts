import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  @Input() message!: string;

  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  ngOnInit(): void {
    setTimeout(() => this.staticAlert.close(),5000);

    this._success.subscribe(message => this.message = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
}
