import { Component, ViewChild, DoCheck, } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  @ViewChild(HeaderComponent) headerCmp;

  isShoppingShowed: boolean;
  isReciveShowed: boolean;


  ngDoCheck() {
    this.isShoppingShowed = this.headerCmp.isShoppingShowed;
    this.isReciveShowed = this.headerCmp.isReciveShowed;
  }

}
