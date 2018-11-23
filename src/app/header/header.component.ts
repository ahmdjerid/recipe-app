import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isShoppingShowed: boolean;
  isReciveShowed: boolean;

  showShopping() {
    this.isShoppingShowed = true;
    this.isReciveShowed = false;

    console.log('isShoppingShowed', this.isShoppingShowed);
    console.log('isReciveShowed', this.isReciveShowed);
  }
  showRecipe() {
    this.isReciveShowed = true;
    this.isShoppingShowed = false;

    console.log('isShoppingShowed', this.isShoppingShowed);
    console.log('isReciveShowed', this.isReciveShowed);

  }
  ngOnInit() {
  }

}
