import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDropDownBtn } from 'src/app/models/IDropDownBtn';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() onClickFilter = new EventEmitter<string>();
   protected navbarOpen: boolean = false;
   protected occasions: IDropDownBtn = {
     btnName:  "Occasions",
     btnNames: ["Anniversary","Birthday", "Wedding", "Get Well", "Thank You"]
   }
   protected flowers: IDropDownBtn = {
    btnName:  "Flowers",
    btnNames: ["Red Rose","Pink Rose", "White Rose", "Daisy", "Lilly","Other"]
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  applyFilter(filter: string) {
    this.onClickFilter.emit(filter); 
  }

}
