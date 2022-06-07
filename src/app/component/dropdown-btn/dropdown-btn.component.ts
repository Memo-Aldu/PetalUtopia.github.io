import { Component, OnInit, Input } from '@angular/core';
import { IDropDownBtn } from 'src/app/models/IDropDownBtn';

@Component({
  selector: 'app-dropdown-btn',
  templateUrl: './dropdown-btn.component.html',
  styleUrls: ['./dropdown-btn.component.css']
})
export class DropdownBtnComponent implements OnInit {
  @Input() dropdownBtn!: IDropDownBtn;
  constructor() { }

  ngOnInit(): void {
  }

}
