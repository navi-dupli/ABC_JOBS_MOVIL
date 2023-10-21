import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private menu: MenuController) {}

  ngOnInit() {
    this.menu.enable(true, 'menuId'); 
  }

  appPages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home',
    },
    {
      title: 'About',
      url: '/menu/about',
      icon: 'information-circle',
    },
  ];

}
