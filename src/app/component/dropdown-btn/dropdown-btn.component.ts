import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { IDropDownBtn } from 'src/app/models/IDropDownBtn';
import { IFlowerCard } from 'src/app/models/IFlowerCard';
import { FlowerFilerServiceService } from 'src/app/services/flower-filer-service.service';

@Component({
  selector: 'app-dropdown-btn',
  templateUrl: './dropdown-btn.component.html',
  styleUrls: ['./dropdown-btn.component.css']
})
export class DropdownBtnComponent implements OnInit {
  @Input() dropdownBtn!: IDropDownBtn;
  @Output() onClickFilter = new EventEmitter<string>();

  constructor(private flowerFilerServiceService: FlowerFilerServiceService) { }

  ngOnInit(): void {
  }

  onFilter(filter: string) {
    this.onClickFilter.emit(filter)
  }

}
