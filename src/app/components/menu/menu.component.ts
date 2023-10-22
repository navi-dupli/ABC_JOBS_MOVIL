import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private menu: MenuController, private authService: AuthService, private router: Router) { }

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

  logout() {
    this.authService.logout();
    this.router.navigate(['/iniciar-sesion']);
    this.menu.enable(false, 'menuId');
  }

}
