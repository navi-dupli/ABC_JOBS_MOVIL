import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  user: any;
  constructor(private menu: MenuController, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.filterMenu();
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

  getScopes() {
    const local = localStorage.getItem('currentUser');
    let currentUser: any;
    if (local !== null) {
      currentUser = JSON.parse(local);
    }
    this.user = {
      name: `${currentUser.names} ${currentUser.surnames}`,
      picture: currentUser.picture,
      rol: currentUser.rol.replace('_', ' ')
    }
    const decodeToken: any = jwt_decode(currentUser.access_token);
    return decodeToken["permissions"] as string[];
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
