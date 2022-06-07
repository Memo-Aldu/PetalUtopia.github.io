import { Component, OnInit, } from '@angular/core';
import { IDropDownBtn } from 'src/app/models/IDropDownBtn';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   protected navbarOpen: boolean = false;
   protected occasions: IDropDownBtn = {
     btnName:  "Occasions",
     btnNames: ["Anniversary","Birthday", "Wedding", "Get Well", "Thank You"]
   }
   protected flowers: IDropDownBtn = {
    btnName:  "Flowers",
    btnNames: ["Red Rose","Pink Rose", "White Rose", "Lavender", "Lilly"]
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
