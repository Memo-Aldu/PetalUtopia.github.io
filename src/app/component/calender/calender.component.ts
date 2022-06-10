import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
