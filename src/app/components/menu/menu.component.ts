import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestureController, MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';
import { SessionService } from "../../services/auth/session.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  user: any;
  disabledMenu: boolean = false;
  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService,
    private gestureCtrl: GestureController) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.filterMenu();
  }
  openEnd() {
    console.log("aaaaaaaaaaaaa")
    this.menu.close();
  }

  model: any[] = [
    {
      label: 'inicio',
      items: [
        { label: 'inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'], scope: ['read:users', 'register:project', 'register:company', 'search:candidate'] }
      ]
    },
    {
      label: 'registar_resultado',
      items: [
        { label: 'registar_resultado', icon: 'pi pi-fw pi-check-square', routerLink: ['/registar-resultado-prueba-tecnica'], scope: ['register:technical-test'] }
      ]
    }
  ];

  logout() {
    this.menu.toggle();
    this.authService.logout();
  }

  openMenu() {
    if (this.sessionService.isAuthenticated()) {
      this.disabledMenu = false
    } else {
      this.disabledMenu = true
    }
  }

  getScopes() {
    return this.sessionService.getScopes();
  }


  filterMenu() {
    const permissions = this.getScopes();
    this.model = this.model.map((item) => {
      if (item.items) {
        item.items = item.items.map((subItem: { scope: any[]; }) => {
          subItem.scope = subItem.scope.filter((scope: string) => {
            return permissions.includes(scope);
          });
          return subItem.scope.length > 0 ? subItem : null;
        });
        item.items = item.items.filter((subItem: null) => { return subItem !== null });
        return item;
      } else {
        return item.scope.find((scope: string) => {
          return permissions.includes(scope);
        }) ? item : null;
      }
    });
  }
}
