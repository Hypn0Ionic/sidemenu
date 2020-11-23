import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  appPages = [ 
    { 
      title: 'First', 
      url: 'first', 
      md: 'home',
      ios: 'home-outline'
    }, { 
      title: 'Second', 
      url: 'second', 
      md: 'people',
      ios: 'people-outline' 
      } 
    ]; 

  constructor() { }

  ngOnInit() {
  }

}
